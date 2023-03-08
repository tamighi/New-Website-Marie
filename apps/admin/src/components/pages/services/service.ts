import { isGeneric, isGenericArray } from "utils";

export interface ServiceDto {
  id: number;
  name: string;
  description: string;
}

export interface CreateServiceDto {
  name?: string;
  description?: string;
}

const serviceDto: ServiceDto = {
  id: 1,
  name: "",
  description: "",
} as const;

export const isService = (data: unknown): data is ServiceDto => {
  return isGeneric(data, serviceDto);
};

export const isServiceArray = (data: unknown): data is ServiceDto[] => {
  return isGenericArray(data, serviceDto);
};
