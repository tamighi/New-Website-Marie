import {
  Controller,
} from "@nestjs/common";
import { MessagesController } from "../message/messages.controller";
import { ReviewDto } from "./dtos/review.dto";
import { Review } from "./entities/review.entity";
import { ReviewsService } from "./reviews.service";

@Controller("review")
export class ReviewsController extends MessagesController<Review, ReviewDto> {
  constructor(private readonly reviewsService: ReviewsService) {
    super(reviewsService);
  }
}
