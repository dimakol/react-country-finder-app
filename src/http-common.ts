import axios from "axios";

//apply base url for axios
const REACT_APP_APP_URL = process.env.REACT_APP_APP_URL;

export default axios.create({
  baseURL: "https://restcountries.com/v3.1",
  headers: {
    "Content-type": "application/json",
  },
});
