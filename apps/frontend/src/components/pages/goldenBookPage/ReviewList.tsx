import { ReviewDto } from "../reviewPage/review";
import { ReviewItem } from "./ReviewItem";

import styles from "./Review.css";
import { EmptyData } from "components/errors/EmptyData";

type Props = {
  reviews: ReviewDto[];
};

export const ReviewList = (props: Props) => {
  const { reviews } = props;

  return (
    <div className={styles.ReviewList}>
      {true ? (
        <EmptyData message="Aucun avis pour le moment" />
      ) : (
        reviews.map((review) => <ReviewItem review={review} key={review.id} />)
      )}
    </div>
  );
};
