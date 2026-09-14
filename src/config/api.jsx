import axios from "axios";

export const api = axios.create({
  baseURL: "https://url-shortner-6bre.onrender.com/",
});