import React from "react";
import { authProvider, ICredentials } from "admin/api/authProvider";
import { useAuthContext } from "admin/providers/AuthProvider";

export const useLogin = () => {
  const authContext = useAuthContext();

  const login = React.useCallback(
    async (credentials: ICredentials) => {
      try {
        const resp = await authProvider.login(credentials);
        console.log(resp)
        authContext?.setAuthenticated(true);
      } catch (error) {
        throw error;
      }
    },
    [authContext]
  );
  return login;
};
