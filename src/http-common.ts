import axios from "axios";

//apply base url for axios
const APP_URL = import.meta.env.VITE_APP_URL;

export default axios.create({
  baseURL: APP_URL,
  headers: {
    "Content-type": "application/json",
  },
});
