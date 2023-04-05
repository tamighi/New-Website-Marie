import { isGeneric, isGenericArray } from "utils";
import { messageDto, MessageDto } from "../common/message";

export type DevisDto = MessageDto;

const devisDto: DevisDto = { ...messageDto } as const;

export const isDevis = (data: unknown): data is DevisDto => {
  return isGeneric(data, devisDto);
};

export const isDevisArray = (data: unknown): data is DevisDto[] => {
  return isGenericArray(data, devisDto);
};
