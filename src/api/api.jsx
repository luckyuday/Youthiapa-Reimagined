import axios from "axios";
const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 1000,
});

export default instance;
