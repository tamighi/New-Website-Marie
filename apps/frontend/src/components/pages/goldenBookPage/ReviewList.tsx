import { ReviewDto } from "../reviewPage/review";
import { ReviewItem } from "./ReviewItem";

import styles from "./Review.css";

type Props = {
  reviews: ReviewDto[];
};

export const ReviewList = (props: Props) => {
  const { reviews } = props;

  return (
    <div className={styles.ReviewList}>
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))}
    </div>
  );
};
