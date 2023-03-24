import { Module } from "@nestjs/common";
import { QuestionsService } from "./questions.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Question } from "./entities/question.entity";

@Module({
  providers: [QuestionsService],
  imports: [TypeOrmModule.forFeature([Question])],
  exports: [QuestionsService],
})
export class QuestionsModule {}
