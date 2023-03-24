import { AbstractService } from "src/models/abstract/abstract.service";
import { Repository } from "typeorm";
import { MessageDto } from "./dtos/messages.dto";
import { Message } from "./entities/messages.entity";

export class MessagesService<
  T extends Message,
  DTO extends MessageDto
> extends AbstractService<T, DTO> {
  protected repository: Repository<T>;

  constructor(messageRepository: Repository<T>) {
    super(messageRepository);
  }

  entityToDto(message: T): DTO {
    const messageDto: DTO = {} as DTO;

    messageDto.id = message.id;
    messageDto.message = message.message;
    messageDto.name = message.name;
    messageDto.email = message.email;
    messageDto.date = message.date;

    return messageDto;
  }
}
