import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MessagesService } from "../message/messages.service";
import { ReviewDto } from "./dtos/review.dto";
import { Review } from "./entities/review.entity";

@Injectable()
export class ReviewsService extends MessagesService<Review, ReviewDto> {
  constructor(
    @InjectRepository(Review)
    protected readonly reviewRepository: Repository<Review>
  ) {
    super(reviewRepository);
  }

  override entityToDto(review: Review): ReviewDto {
    const reviewDto: ReviewDto = super.entityToDto(review);

    return reviewDto;
  }
}
