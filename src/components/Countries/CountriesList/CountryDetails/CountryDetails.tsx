import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CountriesService from "../../../../services/countriesService";
import ICountryDetails from "../../../../types/countryDetails.type";
import ICountryData from "../../../../types/country.type";
import "./CountryDetails.scss";

const CountryDetails: React.FC = () => {
  let { country } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [Country, setCountry] = useState<ICountryDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const countries = await CountriesService.searchByCountryName(country);
      const countryDetails = countries.data.map((details: ICountryData) => ({
        name: details.name.common,
        capital: details.capital,
        population: details.population,
        alpha2Code: details.cca2,
        flag: details.flags.png,
      }));
      setCountry(countryDetails[0]);
      setLoading(false);
    };

    fetchData().catch(console.error);
  }, [country]);

  const renderDetails = () => (
    <>
      <h1>{Country?.name}</h1>
      {renderTable()}
    </>
  );

  const renderTable = () => (
    <table className="center">
      <tbody>
        <tr>
          <th>Capital</th>
          <th>{Country?.capital}</th>
        </tr>
        <tr>
          <td>Population</td>
          <td>{Country?.population.toString()}</td>
        </tr>
        <tr>
          <td>Alpha-2 code</td>
          <td>{Country?.alpha2Code}</td>
          <td></td>
        </tr>
        <tr>
          <td>Flag</td>
          <td>
            <img src={Country?.flag} alt="flag"></img>
          </td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div id="page-wrap">
      <button className="back-button" onClick={() => navigate(-1)}>
        Go back
      </button>
      {loading && <span> page is loading details </span>}
      {!loading && renderDetails()}
    </div>
  );
};
export default CountryDetails;
