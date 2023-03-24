import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MessagesService } from "../message/messages.service";
import { CreateQuestionDto, QuestionDto } from "./dtos/question.dto";
import { Question } from "./entities/question.entity";

@Injectable()
export class QuestionsService extends MessagesService<Question, QuestionDto> {
  constructor(
    @InjectRepository(Question)
    protected readonly questionRepository: Repository<Question>
  ) {
    super(questionRepository);
  }

  entityToDto(question: Question): QuestionDto {
    const questionDto: QuestionDto = new QuestionDto();

    questionDto.id = question.id;
    questionDto.message = question.message;
    questionDto.name = question.name;
    questionDto.email = question.email;
    questionDto.date = question.date;

    return questionDto;
  }

  async postQuestion(question: CreateQuestionDto) {
    const createdQuestion = this.questionRepository.create(question);
    const saved = await this.questionRepository.save(createdQuestion);

    return { data: this.entityToDto(saved) };
  }
}
