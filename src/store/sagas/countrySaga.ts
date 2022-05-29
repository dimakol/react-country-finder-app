import { AxiosResponse } from "axios";
import { call, put, takeEvery, all, fork } from "Redux-Saga/effects";
import { countryActions } from "../slices/countrySlice";
import CountriesService from "../../services/countriesService";
import ICountryData from "../../types/country.type";

function* workGetCountriesFetch() {
  const countries: AxiosResponse = yield call(
    CountriesService.getAllFilteredByNameField
  );
  const countriesNames = countries.data.map(
    (country: ICountryData) => country.name.common
  );
  yield put(countryActions.getCountriesSuccess(countriesNames));
}

function* watchGetCountriesFetch() {
  yield takeEvery("countries/getCountriesFetch", workGetCountriesFetch);
}

function* countrySaga() {
  yield all([fork(watchGetCountriesFetch)]);
}

export default countrySaga;
