import { AbstractTypeGuard } from "./abstract.entity";
import { messageDto, MessageDto } from "./message";

export type DevisDto = MessageDto;

export const devisDto: DevisDto = { ...messageDto };

export class DevisEntity extends AbstractTypeGuard<DevisDto> {
  constructor() {
    super(devisDto)
  }
}

