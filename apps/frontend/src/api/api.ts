import query_string from "query-string";
import { MessageDto } from "types";
import { httpClient } from "./httpClient";

const apiUrl = process.env.BACKEND_URL;

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
  resource: string
): Promise<any> => {
  const url = `${apiUrl}/${resource}/postMessage`;
  return httpClient(url, { method: "POST", body: JSON.stringify(message) });
};

export const postFormData = async (
  message: FormData,
  resource: string
): Promise<any> => {
  const url = `${apiUrl}/${resource}/postFile`;

  return httpClient(url, { method: "POST", body: message });
};

export interface GetReviewsParams {
  pagination: { page: number; perPage: number };
}

export const getReviews = async (params: GetReviewsParams): Promise<any> => {
  const { page, perPage } = params.pagination;

  const query = {
    range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  };

  const url = `${apiUrl}/review/fetchReviews?${query_string.stringify(query)}`;
  return httpClient(url);
};
