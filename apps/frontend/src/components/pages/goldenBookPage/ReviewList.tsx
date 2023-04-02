import { ReviewDto } from "../reviewPage/review";

type Props = {
  reviews: ReviewDto[];
};

export const ReviewList = (props: Props) => {
  const { reviews } = props;

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>{review.message}</p>
        </li>
      ))}
    </ul>
  );
}
