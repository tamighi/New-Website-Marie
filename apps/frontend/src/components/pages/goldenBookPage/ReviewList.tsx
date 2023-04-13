import { ReviewDto } from "../reviewPage/review";
import { ReviewItem } from "./ReviewItem";
import { EmptyData } from "components/errors/EmptyData";

import styles from "./Review.css";

type Props = {
  reviews: ReviewDto[];
};

export const ReviewList = (props: Props) => {
  const { reviews } = props;

  return (
    <div className={styles.ReviewList}>
      {reviews.length === 0 ? (
        <EmptyData message="Aucun avis pour le moment" />
      ) : (
        reviews.map((review) => <ReviewItem review={review} key={review.id} />)
      )}
    </div>
  );
};
