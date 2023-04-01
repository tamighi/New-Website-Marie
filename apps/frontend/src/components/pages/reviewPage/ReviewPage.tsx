import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { ReviewContactForm } from "./ReviewContactForm";

export const ReviewPage = () => {
  return (
    <CenteredPage>
      <h2>Laissez moi un avis !</h2>
      <ReviewContactForm />
    </CenteredPage>
  );
};
