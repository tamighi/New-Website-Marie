import {
  CreateMessageDto,
  MessageDto,
} from "src/models/message/dtos/messages.dto";

export class ReviewDto extends MessageDto {}

export class CreateReviewDto extends CreateMessageDto {}
