import { RightDrawer } from "components/pages/core";
import { QuestionDetails } from "./QuestionDetails";

interface Match {
  open: true;
  id: number | string;
}

interface NoMatch {
  open: false;
  id: undefined;
}

export type QuestionDrawerProps = Match | NoMatch

export const QuestionDrawer = (props: QuestionDrawerProps) => {
  const { open, id } = props
  return (
    <RightDrawer open={open}>
      {open && <QuestionDetails id={id} />}
    </RightDrawer>
  );
};
