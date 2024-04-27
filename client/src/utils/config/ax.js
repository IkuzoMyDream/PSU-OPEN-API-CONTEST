import axios from "axios";

import { psuConfig, localConfig } from "./main";

export const axDATA = {
  token: null,
};

const axPSU = axios.create({
  baseURL: psuConfig.urlPrefix,
});

const axLOCAL = axios.create({
  baseURL: localConfig.urlPrefix,
});

axPSU.interceptors.request.use(
  async (config) => {
    if (axDATA.token) {
      config.headers["token"] = axDATA.token;
    }
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export { axPSU, axLOCAL };
