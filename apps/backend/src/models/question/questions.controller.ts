import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { AbstractController } from "src/models/abstract/abstract.controller";
import { CreateQuestionDto, QuestionDto } from "./dtos/question.dto";
import { Question } from "./entities/question.entity";
import { QuestionsService } from "./questions.service";

@Controller("question")
export class QuestionsController extends AbstractController<
  Question,
  QuestionDto
> {
  constructor(private readonly questionService: QuestionsService) {
    super(questionService);
  }

  @Post("postQuestion")
  async postQuestion(@Body() body: any) {
    try {
      return await this.questionService.postQuestion(body);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }
}
