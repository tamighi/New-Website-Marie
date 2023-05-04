import { messageDto, MessageDto } from "./message";

export type ReviewDto = MessageDto;

export const reviewDto: ReviewDto = { ...messageDto };
