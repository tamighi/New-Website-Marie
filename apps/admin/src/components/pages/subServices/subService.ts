import { isGeneric, isGenericArray } from "utils";

export interface SubServiceDto {
  id: number;
  textType: string;
  pricePerCharacter: number;
}

export interface CreateSubServiceDto {
  textType?: string;
  pricePerCharacter?: number;
}

const subServiceDto: SubServiceDto = {
  id: 1,
  textType: "",
  pricePerCharacter: 1,
} as const;

export const isSubService = (data: unknown): data is SubServiceDto => {
  return isGeneric(data, subServiceDto);
};

export const isSubServiceArray = (data: unknown): data is SubServiceDto[] => {
  return isGenericArray(data, subServiceDto);
};
