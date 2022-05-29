import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import { countryActions } from "./store/slices/countrySlice";
import { eventChannel, END } from "redux-saga";
import SideBar from "./components/Sidebar/Sidebar";
import CountriesList from "./components/Countries/CountriesList/CountriesList";
import CountryDetails from "./components/Countries/CountriesList/CountryDetails/CountryDetails";

const App = () => {
  const countries = useAppSelector((state) => state.countries.countries);
  const dispatch = useAppDispatch();

  var timer: any;
  const [countriesDictionary, setCountriesDictionary] = useState<{
    [key: string]: string[];
  }>({});
  const [letter, setLetter] = useState<string>("");

  useEffect(() => {
    dispatch(countryActions.getCountriesFetch());
  }, [dispatch]);

  useEffect(() => {
    createCountriesDictionary(countries);
  }, [countries]);

  useEffect(() => {
    const sortedLetters = Object.keys(countriesDictionary).sort();
    if (sortedLetters.length) {
      // set initial letter
      setLetter(sortedLetters[0]);
    }
  }, [countriesDictionary]);

  useEffect(() => {
    startPolling();

    return () => {
      stopPolling();
    };
  }, [letter]);

  const createCountriesDictionary = (countries: string[]) => {
    const dict: { [key: string]: string[] } = {};
    countries.forEach((country) => {
      // array of countries already exists in the dictionary in this letter
      if (Array.isArray(dict[country[0].toUpperCase()])) {
        // add country to dictionary by letter key
        dict[country[0].toUpperCase()].push(country);
      } else {
        // set country to dictionary by letter key
        dict[country[0].toUpperCase()] = [country];
      }
    });
    setCountriesDictionary(dict);
  };

  // emit message every n milliseconds
  const startPolling = (time = 15000) => {
    timer = setInterval(emitMessage, time);
  };

  const stopPolling = () => {
    if (timer) {
      clearInterval(timer);
    }
  };

  const emitMessage = () => {
    let promise = new Promise((resolve) => {
      // get all countries starting with that letter
      const countries = countriesDictionary[letter];
      const sortedLetters = Object.keys(countriesDictionary).sort();
      let index = sortedLetters.indexOf(letter);
      // doesn't last index in the array
      if (index + 1 !== sortedLetters.length) {
        // set next letter
        setLetter(sortedLetters[index + 1]);
      }
      // last index in the array
      else {
        stopPolling();
      }

      resolve(countries);
    });
    promise.then((msg) => {
      console.log(msg);
      dispatch(countryActions.getMessage(msg));
    });
  };

  const Home = () => (
    <div id="page-wrap">
      <h1>Country finder</h1>
      <h3>Welcome to country finder application</h3>
    </div>
  );

  return (
    <div id="App">
      <SideBar items={Object.keys(countriesDictionary).sort()} />
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path={`:letter`}
            element={<CountriesList dict={countriesDictionary} />}
          />
          <Route path={`:letter/:country`} element={<CountryDetails />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
