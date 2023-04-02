import { isGeneric, isGenericArray } from "utils";

export interface ReviewDto {
  id: number;
  message: string;
  date?: Date;
  name?: string;
  email?: string;
}

const reviewDto: ReviewDto = {
  id: 1,
  message: "",
} as const;

export const isReview = (data: unknown): data is ReviewDto => {
  return isGeneric(data, reviewDto);
};

export const isReviewArray = (data: unknown): data is ReviewDto[] => {
  return isGenericArray(data, reviewDto);
};
