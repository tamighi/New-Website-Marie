import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { useReviews } from "hooks/useReviews";
import { ReviewList } from "./ReviewList";

export const GoldenBookPage = () => {
  const { data } = useReviews();
  if (!data) {
    return null;
  }
  return (
    <CenteredPage>
      <h2>Les avis !</h2>
      {data.data.length !== 0 ? (
        <ReviewList reviews={data.data} />
      ) : (
        <p>No reviews</p>
      )}
    </CenteredPage>
  );
};
