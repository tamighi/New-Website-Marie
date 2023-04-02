import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { useReviews } from "hooks/useReviews";

export const GoldenBookPage = () => {
  const { data } = useReviews();
  if (!data) {
    return null;
  }
  console.log(data);
  return (
    <CenteredPage>
      <h2>Les avis !</h2>
      <ul>
        {data.data.map((review) => (
          <li key={review.id}>
            <p>{review.message}</p>
          </li>
        ))}
      </ul>
    </CenteredPage>
  );
};
