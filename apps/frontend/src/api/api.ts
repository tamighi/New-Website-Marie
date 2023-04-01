import { MessageDto } from "components/pages/contactPage/message";
import { httpClient } from "./httpClient";

const apiUrl = "http://192.168.1.50:8000";

export const getServices = async (): Promise<any> => {
  const url = `${apiUrl}/service/fetchServices`;
  return httpClient(url);
};

export const getService = async (id: string): Promise<any> => {
  const url = `${apiUrl}/service/fetchServices/${id}`;
  return httpClient(url);
};

export const postMessage = async <T extends MessageDto>(
  message: Partial<T>,
  resource: string,
): Promise<any> => {
  const url = `${apiUrl}/${resource}/postMessage`;
  return httpClient(url, { method: "POST", body: JSON.stringify(message) });
};
