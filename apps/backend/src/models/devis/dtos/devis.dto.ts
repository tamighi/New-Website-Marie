import { MessageDto } from "src/models/message/dtos/messages.dto";
import { ServiceDto } from "src/models/service/dtos/service.dto";
import { SubServiceDto } from "src/models/subService/dtos/subService.dto";

export class DevisDto extends MessageDto {
  nbCharacter: number;
  fileName?: string;
  endDate?: Date;
  subService?: SubServiceDto;
  service?: ServiceDto;
}
