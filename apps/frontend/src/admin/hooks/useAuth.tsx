import React from "react";
import { authProvider, ICredentials } from "admin/api/authProvider";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);

  const login = React.useCallback(async (credentials: ICredentials) => {
    try {
      const resp = await authProvider.login(credentials);
      setAuthenticated(true);
      return resp;
    } catch (error) {
      throw error;
    }
  }, []);

  const logout = React.useCallback(async () => {
    try {
      await authProvider.logout();
      setAuthenticated(false);
    } catch (error) {
      throw error;
    }
  }, []);

  return { authenticated, login, logout };
};
