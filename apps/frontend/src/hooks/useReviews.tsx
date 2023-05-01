import { getReviews, GetReviewsParams } from "api";
import { ReviewDto } from "components/pages/reviewPage/review";
import { useQuery } from "react-query";

const useReviews = (params: GetReviewsParams) => {
  const { data, isLoading, isError } = useQuery<{
    data: ReviewDto[];
    count: number;
  }>(["review", params], () => getReviews(params));
  return { data, isLoading, isError };
};

export default useReviews;
