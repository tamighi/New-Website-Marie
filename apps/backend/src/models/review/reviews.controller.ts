import {
  Controller,
} from "@nestjs/common";
import { AbstractController } from "src/models/abstract/abstract.controller";
import { ReviewDto } from "./dtos/review.dto";
import { Review } from "./entities/review.entity";
import { ReviewsService } from "./reviews.service";

@Controller("review")
export class ReviewsController extends AbstractController<Review, ReviewDto> {
  constructor(private readonly reviewsService: ReviewsService) {
    super(reviewsService);
  }
}
