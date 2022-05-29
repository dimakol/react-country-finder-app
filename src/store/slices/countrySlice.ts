import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    isLoading: false,
    message: [],
  },
  reducers: {
    getCountriesFetch: (state) => {
      state.isLoading = true;
    },
    getCountriesSuccess: (state, action) => {
      state.countries = action.payload;
      state.isLoading = false;
    },
    getCountriesFailure: (state) => {
      state.isLoading = false;
    },
    getMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const countryActions = countrySlice.actions;

export default countrySlice;
