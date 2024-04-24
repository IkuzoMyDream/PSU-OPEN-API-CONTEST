import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { axDATA } from "./config/ax";

const updateToken = (token) => {
  axDATA.token = token;
};

export const AxiosInterceptor = ({ children }) => {
  const auth = useAuth();

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      updateToken(auth.user.access_token);
    }
  }, [auth, auth.user]);

  return children;
};
