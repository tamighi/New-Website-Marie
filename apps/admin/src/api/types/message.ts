enum Status {
  PENDING = "pending",
  ACCEPTED = "accepted",
  REFUSED = "refused",
}

export interface MessageDto {
  id: number;
  message: string;
  status: Status;
  date?: Date;
  name?: string;
  email?: string;
}

export const messageDto: MessageDto = {
  id: 1,
  message: "",
  status: Status.PENDING,
} as const;
