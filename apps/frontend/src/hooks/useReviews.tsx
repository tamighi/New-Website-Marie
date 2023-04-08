import { getReviews, GetReviewsParams } from "api/api";
import { ReviewDto } from "components/pages/reviewPage/review";
import { useQuery } from "react-query";

export const useReviews = (params: GetReviewsParams) => {
  const { data } = useQuery<{ data: ReviewDto[]; count: number }>(
    ["review", params],
    () => getReviews(params)
  );
  return { data };
};
