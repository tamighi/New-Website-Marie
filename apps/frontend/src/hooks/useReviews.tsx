import { getReviews, GetReviewsParams } from "api";
import { useQuery } from "react-query";
import { ReviewDto } from "types";

const useReviews = (params: GetReviewsParams) => {
  const { data, isLoading, isError } = useQuery<{
    data: ReviewDto[];
    count: number;
  }>(["review", params], () => getReviews(params));
  return { data, isLoading, isError };
};

export default useReviews;
