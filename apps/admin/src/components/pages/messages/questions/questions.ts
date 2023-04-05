import { isGeneric, isGenericArray } from "utils";
import { messageDto, MessageDto } from "../common/message";

export type QuestionDto = MessageDto;

const questionDto: QuestionDto = { ...messageDto } as const;

export const isQuestion = (data: unknown): data is QuestionDto => {
  return isGeneric(data, questionDto);
};

export const isQuestionArray = (data: unknown): data is QuestionDto[] => {
  return isGenericArray(data, questionDto);
};
