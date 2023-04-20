import React from "react";
import styles from "./Rating.css";

interface RatingProps {
  onChange: (value: number) => void;
}

const Rating = ({ onChange }: RatingProps) => {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);

  const handleRatingChange = (value: number) => {
    setRating(value);
    onChange(value);
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
    </div>
  );
};

export default Rating;
