import { matchPath, useLocation } from "react-router-dom";
import { ReviewCard } from "./ReviewCard";
import { ReviewDrawer, ReviewDrawerProps } from "./ReviewDrawer";

export const ReviewPage = () => {
  const location = useLocation();

  const match = matchPath("/review/:id", location.pathname);

  const reviewDrawerProps: ReviewDrawerProps = match
    ? { open: true, id: match.params.id as string }
    : { open: false, id: undefined };

  return (
    <>
      <ReviewCard openDrawer={!!match} />
      <ReviewDrawer {...reviewDrawerProps} />
    </>
  );
};
