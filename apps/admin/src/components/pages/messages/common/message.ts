import { isGeneric, isGenericArray } from "utils";

export interface MessageDto {
  id: number;
  message: string;
  date?: Date;
  name?: string;
  email?: string;
}

export const messageDto: MessageDto = {
  id: 1,
  message: "",
} as const;

export const isMessage = (data: unknown): data is MessageDto => {
  return isGeneric(data, messageDto);
};

export const isMessageArray = (data: unknown): data is MessageDto[] => {
  return isGenericArray(data, messageDto);
};
