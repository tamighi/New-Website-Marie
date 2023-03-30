import {
  CreateMessageDto,
  MessageDto,
} from "src/models/message/dtos/messages.dto";

export class QuestionDto extends MessageDto {}

export class CreateQuestionDto extends CreateMessageDto {}
