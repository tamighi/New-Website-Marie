import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AbstractService } from "src/models/abstract/abstract.service";
import { Repository } from "typeorm";
import { QuestionDto } from "./dtos/question.dto";
import { Question } from "./entities/question.entity";

@Injectable()
export class QuestionsService extends AbstractService<Question, QuestionDto> {
  constructor(
    @InjectRepository(Question)
    protected readonly questionRepository: Repository<Question>
  ) {
    super(questionRepository);
  }

  entityToDto(question: Question): QuestionDto {
    const questionDto: QuestionDto = new QuestionDto();

    questionDto.id = question.id;
    questionDto.identifier = question.identifier;
    questionDto.password = question.password;

    return questionDto;
  }
}
