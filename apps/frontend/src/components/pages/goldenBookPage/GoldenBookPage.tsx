import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { Title } from "components/typography/Title";
import { useReviews } from "hooks/useReviews";
import { ReviewList } from "./ReviewList";

// TODO: Well ... Add style
export const GoldenBookPage = () => {
  const { data } = useReviews();
  if (!data) {
    return null;
  }
  return (
    <CenteredPage>
      <Title>Les avis !</Title>
      {data.data.length !== 0 ? (
        <ReviewList reviews={data.data} />
      ) : (
        <p>No reviews</p>
      )}
    </CenteredPage>
  );
};
