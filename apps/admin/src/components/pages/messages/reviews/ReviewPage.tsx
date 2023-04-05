import { matchPath, useLocation } from "react-router-dom";
import { MessageDrawer } from "../common/MessageDrawer";
import { ReviewCard } from "./ReviewCard";
import { ReviewDetails } from "./ReviewDetails";

export const ReviewPage = () => {
  const location = useLocation();

  const match = matchPath("/review/:id", location.pathname);

  return (
    <>
      <ReviewCard openDrawer={!!match} />
      <MessageDrawer open={!!match}>
        {!!match && <ReviewDetails id={match.params.id as string} />}
      </MessageDrawer>
    </>
  );
};
