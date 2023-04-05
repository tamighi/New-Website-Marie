import { isGeneric, isGenericArray } from "utils";
import { messageDto, MessageDto } from "../common/message";

export type ReviewDto = MessageDto;

const reviewDto: ReviewDto = { ...messageDto } as const;

export const isReview = (data: unknown): data is ReviewDto => {
  return isGeneric(data, reviewDto);
};

export const isReviewArray = (data: unknown): data is ReviewDto[] => {
  return isGenericArray(data, reviewDto);
};
