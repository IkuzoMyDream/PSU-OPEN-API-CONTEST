import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { AuthProvider } from "react-oidc-context";
import App from "./App";

const oidcConfig = {
  onSigninCallback: (user) => {
    window.location = "/home";
  },
  authority:
    "http://psusso-test.psu.ac.th/application/o/psuapi-contest-bruteforceapi",
  client_id: "QN9QkBfY6Hhx95kMSIXEjp629yEJNREtk7NTHsjr",
  scope: "openid email profile offline_access",
  response_ype: "code",
  silent_renew: true,
  use_refresh_token: true,
  redirect_uri: "http://localhost:3000/home",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
