export class QuestionDto {
  id: number;
  message: string;
  name?: string;
  email?: string;
  date: Date;
}

export class CreateQuestionDto {
  message: string;
  name?: string;
  email?: string;
}
