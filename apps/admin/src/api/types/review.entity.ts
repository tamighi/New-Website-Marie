import { AbstractTypeGuard } from "./abstract.entity";
import { messageDto, MessageDto } from "./message";

export type ReviewDto = MessageDto;

export const reviewDto: ReviewDto = { ...messageDto };

export class ReviewEntity extends AbstractTypeGuard<ReviewDto> {
  constructor() {
    super(reviewDto)
  }
}
