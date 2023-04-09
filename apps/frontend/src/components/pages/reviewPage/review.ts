import { MessageDto } from "../contactPage/message";

export interface ReviewDto extends MessageDto {
  note: number;
}
