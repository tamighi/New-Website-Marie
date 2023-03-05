import { httpClient } from "./utils";

const apiUrl = "http://192.168.1.50:8000";

export interface ICredentials {
  username: string;
  password: string;
}

export const authProvider = {
  login: async (credentials: ICredentials) => {
    const url = `${apiUrl}/auth/login`;
    return httpClient(url, {
      method: "post",
      body: JSON.stringify(credentials),
    });
  },
  logout: async () => {
    return Promise.resolve();
  },
};
