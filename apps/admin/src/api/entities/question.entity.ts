import { AbstractEntity } from "./abstract.entity";
import { messageDto, MessageDto } from "./message";

export type QuestionDto = MessageDto;

const questionDto: QuestionDto = { ...messageDto };

export class QuestionEntity extends AbstractEntity<QuestionDto> {
  constructor() {
    super(questionDto)
  }
}
