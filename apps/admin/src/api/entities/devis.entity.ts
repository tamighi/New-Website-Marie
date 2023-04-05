import { AbstractEntity } from "./abstract.entity";
import { messageDto, MessageDto } from "./message";

export type DevisDto = MessageDto;

const devisDto: DevisDto = { ...messageDto };

export class DevisEntity extends AbstractEntity<DevisDto> {
  constructor() {
    super(devisDto)
  }
}

