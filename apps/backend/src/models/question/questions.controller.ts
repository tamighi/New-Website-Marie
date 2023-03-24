import { Controller } from "@nestjs/common";
import { AbstractController } from "src/models/abstract/abstract.controller";
import { QuestionDto } from "./dtos/question.dto";
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
}
