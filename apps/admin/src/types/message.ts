enum Status {
  PENDING = "pending",
  ACCEPTED = "accepted",
  REFUSED = "refused",
}

export interface MessageDto {
  id: number;
  message: string;
  status: Status;
  date: string;
  name?: string;
  email?: string;
}

export const messageDto: MessageDto = {
  id: 1,
  message: "",
  status: Status.PENDING,
  date: new Date().toLocaleDateString(),
} as const;
