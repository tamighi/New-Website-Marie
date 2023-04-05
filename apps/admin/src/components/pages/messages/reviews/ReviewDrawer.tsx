import { RightDrawer } from "components/pages/core";
import { ReviewDetails } from "./ReviewDetails";

interface Match {
  open: true;
  id: number | string;
}

interface NoMatch {
  open: false;
  id: undefined;
}

export type ReviewDrawerProps = Match | NoMatch

export const ReviewDrawer = (props: ReviewDrawerProps) => {
  const { id, open } = props;

  return (
    <RightDrawer open={open}>{open && <ReviewDetails id={id} />}</RightDrawer>
  );
};
