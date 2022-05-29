import http from "../http-common";
import ICountryData from "../types/country.type";

const getAllFilteredByNameField = () => {
  return http.get<Array<ICountryData>>("/all?fields=name");
};

const searchByCountryName = (name: string | undefined) => {
  return http.get<Array<ICountryData>>(`/name/${name}`);
};

const CountriesService = {
  getAllFilteredByNameField,
  searchByCountryName,
};
export default CountriesService;
