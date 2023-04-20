import React from "react";
import styles from "./Rating.css";

type RatingProps = React.InsHTMLAttributes<HTMLInputElement>

const Rating = (props: RatingProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);

  const handleRatingChange = (value: number) => {
    setRating(value);

  };

  const handleHoverRating = (value: number) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className={styles.RatingContainer}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`${styles.RatingStar} ${
            value <= (hoverRating || rating) ? styles.active : ""
          }`}
          onClick={() => handleRatingChange(value)}
          onMouseEnter={() => handleHoverRating(value)}
          onMouseLeave={() => handleMouseLeave()}
        >
          ★
        </span>
      ))}
      <input type="hidden" {...props} ref={ref}/>
    </div>
  );
};

export default React.forwardRef(Rating);
