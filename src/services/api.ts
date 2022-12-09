import axios from "axios";

export const api = axios.create({
  baseURL: "https://banking-api.adaptable.app/",
});
