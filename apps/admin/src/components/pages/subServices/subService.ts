import { isGeneric, isGenericArray } from "utils";

export interface SubServiceDto {
  id: number;
  name: string;
  description: string;
}

export interface CreateSubServiceDto {
  name?: string;
  description?: string;
}

const subServiceDto: SubServiceDto = {
  id: 1,
  name: "",
  description: "",
} as const;

export const isSubService = (data: unknown): data is SubServiceDto => {
  return isGeneric(data, subServiceDto);
};

export const isSubServiceArray = (data: unknown): data is SubServiceDto[] => {
  return isGenericArray(data, subServiceDto);
};
