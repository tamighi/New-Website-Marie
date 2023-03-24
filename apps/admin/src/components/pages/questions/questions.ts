import { isGeneric, isGenericArray } from "utils";

export interface QuestionDto {
  id: number;
  message: string;
  date?: Date;
  name?: string;
  email?: string;
}

const serviceDto: QuestionDto = {
  id: 1,
  message: "",
} as const;

export const isQuestion = (data: unknown): data is QuestionDto => {
  return isGeneric(data, serviceDto);
};

export const isQuestionArray = (data: unknown): data is QuestionDto[] => {
  console.log(data);
  return isGenericArray(data, serviceDto);
};
