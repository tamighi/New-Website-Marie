import { isGeneric, isGenericArray } from "utils";

export interface DevisDto {
  id: number;
  message: string;
  date?: Date;
  name?: string;
  email?: string;
}

const devisDto: DevisDto = {
  id: 1,
  message: "",
} as const;

export const isDevis = (data: unknown): data is DevisDto => {
  return isGeneric(data, devisDto);
};

export const isDevisArray = (data: unknown): data is DevisDto[] => {
  return isGenericArray(data, devisDto);
};
