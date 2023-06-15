import { MessageDto } from "types";

export interface DevisDto extends MessageDto {
  nbCharacter: number;
  service?: {
    id: number;
  };
  subService?: {
    id: number;
  };
  endDate: number;
  file: File;
}
