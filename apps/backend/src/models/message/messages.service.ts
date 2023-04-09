import { AbstractService } from "src/models/abstract/abstract.service";
import { DeepPartial, Repository } from "typeorm";
import { MessageDto } from "./dtos/messages.dto";
import { Message } from "./entities/messages.entity";

export class MessagesService<
  T extends Message,
  DTO extends MessageDto
> extends AbstractService<T, DTO> {
  protected messageRepository: Repository<T>;

  constructor(messageRepository: Repository<T>) {
    super(messageRepository);
    this.messageRepository = messageRepository;
  }

  entityToDto(message: T): DTO {
    const messageDto: DTO = {} as DTO;

    messageDto.id = message.id;
    messageDto.message = message.message;
    messageDto.name = message.name;
    messageDto.email = message.email;
    messageDto.status = message.status;
    messageDto.date = message.date;

    return messageDto;
  }

  async postMessage(message: DeepPartial<T>) {
    const createdQuestion = this.messageRepository.create(message);
    const saved = await this.messageRepository.save(createdQuestion);

    return { data: this.entityToDto(saved) };
  }
}
