export interface SubServiceDto {
  id: number;
  textType: string;
  pricePerCharacter: number;
}

export interface ServiceDto {
  id: number;
  name: string;
  description: string;
  subServices?: SubServiceDto[];
}

export const serviceDto: ServiceDto = {
  id: 1,
  name: "",
  description: "",
};

export const subServiceDto: SubServiceDto = {
  id: 1,
  textType: "",
  pricePerCharacter: 1,
};
