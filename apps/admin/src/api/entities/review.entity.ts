import { AbstractEntity } from "./abstract.entity";
import { messageDto, MessageDto } from "./message";

export type ReviewDto = MessageDto;

const reviewDto: ReviewDto = { ...messageDto };

export class ReviewEntity extends AbstractEntity<ReviewDto> {
  constructor() {
    super(reviewDto)
  }
}
