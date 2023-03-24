export class MessageDto {
  id: number;
  message: string;
  name?: string;
  email?: string;
  date: Date;
}

export class CreateMessageDto {
  message: string;
  name?: string;
  email?: string;
}
