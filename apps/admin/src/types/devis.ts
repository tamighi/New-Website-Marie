import { messageDto, MessageDto } from "./message";
import { ServiceDto, SubServiceDto } from "./service";

export type DevisDto = MessageDto & {
  nbCharacter: number;
  price?: number;
  endDate?: Date;
  subService?: SubServiceDto;
  service?: ServiceDto;
};

export const devisDto: DevisDto = { ...messageDto, nbCharacter: 1 };
