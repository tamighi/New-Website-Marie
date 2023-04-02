import { ReviewDto } from "../reviewPage/review";
import { ReviewItem } from "./ReviewItem";

type Props = {
  reviews: ReviewDto[];
};

export const ReviewList = (props: Props) => {
  const { reviews } = props;

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
}
