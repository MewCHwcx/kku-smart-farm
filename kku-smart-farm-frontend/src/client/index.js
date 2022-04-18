import axios from "axios";

axios.interceptors.request.use(async (config) => {
  config.baseURL = "http://localhost:9000";
  config.headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  return config;
});

export const httpClient = axios;
