import { QuestionDto } from "components/pages/contactPage/questions";
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

export const postQuestion = async (question: QuestionDto): Promise<any> => {
  const url = `${apiUrl}/question/postQuestion`;
  console.log(question);
};
