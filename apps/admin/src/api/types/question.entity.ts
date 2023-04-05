import { AbstractTypeGuard } from "./abstract.entity";
import { messageDto, MessageDto } from "./message";

export type QuestionDto = MessageDto;

export const questionDto: QuestionDto = { ...messageDto };

export class QuestionEntity extends AbstractTypeGuard<QuestionDto> {
  constructor() {
    super(questionDto)
  }
}
