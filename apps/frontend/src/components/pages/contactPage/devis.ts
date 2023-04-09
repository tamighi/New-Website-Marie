import { MessageDto } from "./message";

export interface DevisDto extends MessageDto {
  nbCharacter: number;
  service?: {
    id: number;
  }
  subService?: {
    id: number;
  }
}
