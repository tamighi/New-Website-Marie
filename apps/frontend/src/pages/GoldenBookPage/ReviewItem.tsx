import React from "react";

import { Button, Paper } from "lib";
import { useIsOverflow } from "hooks";
import { ReviewDto } from "types";

import styles from "./Review.css";
import typography from "../../components/typography/Typography.css";
import { Rating } from "components";

type Props = {
  review: ReviewDto;
};

const ReviewItem = (props: Props) => {
  const { review } = props;

  const ref = React.useRef<HTMLParagraphElement>(null);
  const [isReadMore, setIsReadMore] = React.useState(false);
  const isOverflow = useIsOverflow(ref, null);

  const messageClassnames = `${typography.Paragraph} ${styles.ReviewMessage} ${
    isReadMore
      ? styles.ReviewMessageFull
      : isOverflow
      ? styles.ReviewMessageOverflow
      : ""
  }`;

  return (
    <Paper>
      <div className={styles.ReviewItemHead}>
        <span>{review.name || "anonyme"}</span>
        <div>
          <Rating disabled value={review.note} />
          <span>{` ${new Date(review.date).toLocaleDateString()}`}</span>
        </div>
      </div>
      <p ref={ref} className={messageClassnames} id="review-message">
        {review.message}
      </p>
      {isOverflow && (
        <Button onClick={() => setIsReadMore(!isReadMore)}>
          {isReadMore ? "Voir moins..." : "Voir plus..."}
        </Button>
      )}
    </Paper>
  );
};

export default ReviewItem;
