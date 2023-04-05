export interface MessageDto {
  id: number;
  message: string;
  date?: Date;
  name?: string;
  email?: string;
}

export const messageDto: MessageDto = {
  id: 1,
  message: "",
} as const;
