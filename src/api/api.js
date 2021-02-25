import axios from "axios";
// import {Auth} from "@aws-amplify/auth";

const api = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(async config => {
  // await Auth.currentAuthenticatedUser();
  return config;
});

export default api;