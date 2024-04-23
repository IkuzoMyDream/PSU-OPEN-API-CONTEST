import axios from "axios";

import { localConfig, psuConfig } from "./main";

const axPSU = axios.create({
  baseURL: psuConfig.urlPrefix,
});

const axLOCAL = axios.create({
  baseURL: localConfig.urlPrefix,
});

export { axPSU, axLOCAL };
