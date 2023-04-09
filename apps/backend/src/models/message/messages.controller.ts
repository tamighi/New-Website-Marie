import { Body, HttpException, HttpStatus, Post } from "@nestjs/common";
import { AbstractController } from "src/models/abstract/abstract.controller";
import { MessageDto } from "./dtos/messages.dto";
import { Message } from "./entities/messages.entity";
import { MessagesService } from "./messages.service";

export class MessagesController<
  T extends Message,
  DTO extends MessageDto
> extends AbstractController<T, DTO> {
  constructor(
    private readonly messageService: MessagesService<T, DTO>
  ) {
    super(messageService);
  }

  @Post("postMessage")
  async postMessage(@Body() body: any) {
    try {
      return await this.messageService.postMessage(body);
    } catch (err) {
      console.log(err)
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }
}
