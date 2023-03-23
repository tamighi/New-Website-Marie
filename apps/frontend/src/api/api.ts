import { httpClient } from "./httpClient";

const apiUrl = "http://192.168.1.50:8000";

export const getServices = async (): Promise<any> => {
  const url = `${apiUrl}/service/fetchServices`;
  return httpClient(url);
};
