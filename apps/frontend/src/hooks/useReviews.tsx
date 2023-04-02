import { getReviews } from "api/api";
import { ReviewDto } from "components/pages/reviewPage/review";
import { useQuery } from "react-query";

export const useReviews = () => {
  const { data } = useQuery<{ data: ReviewDto[], count: number }>("review", getReviews);
  return { data };
};
