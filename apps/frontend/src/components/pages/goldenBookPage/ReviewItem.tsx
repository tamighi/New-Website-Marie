import { ReviewDto } from "../reviewPage/review";

type Props = {
  review: ReviewDto;
};

export const ReviewItem = (props: Props) => {
  const { review } = props;
  return <p>{review.message}</p>;
};
