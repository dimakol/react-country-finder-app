import React, { ChangeEvent, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SearchInput } from "../../SearchInput/SearchInput";
import "./CountriesList.scss";

const CountriesList: React.FC<{
  dict: { [key: string]: string[] };
}> = ({ dict }) => {
  // Get the letter param from the URL.
  let { letter } = useParams();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>("");
  let countries: string[] = [];

  if (letter?.length === 1 && Object.keys(dict).length) {
    countries = dict[letter];
  }

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    // convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setSearchText(lowerCase);
  };

  // there is input in search text
  if (searchText.length) {
    // filter the gallery by photos title which contains the search text
    countries = countries.filter((country) =>
      country.toLowerCase().includes(searchText)
    );
  }

  return (
    <React.Fragment>
      <div id="page-wrap">
        <button className="back-button" onClick={() => navigate(-1)}>
          Go back
        </button>
        <h1>{letter}</h1>
        <SearchInput value={searchText} onChange={onChangeSearchInput} />
        <div className="countries">
          {countries.map((country, index) => {
            return (
              <div key={index.toString()}>
                <Link to={`${country}`}>{country}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountriesList;
