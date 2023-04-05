import { matchPath, useLocation } from "react-router-dom";
import { ReviewCard } from "./ReviewCard";
import { ReviewDrawer } from "./ReviewDrawer";

export const ReviewPage = () => {
  const location = useLocation();

  const match = matchPath("/reviews/:id", location.pathname);

  return (
    <>
      <ReviewCard openDrawer={!!match} />
      <ReviewDrawer />
    </>
  );
};
