import { matchPath, useLocation } from "react-router-dom";
import { MessageDrawer } from "../common/MessageDrawer";
import { QuestionCard } from "./QuestionCard";
import { QuestionDetails } from "./QuestionDetails";

export const QuestionPage = () => {
  const location = useLocation();

  const match = matchPath("/question/:id", location.pathname);

  return (
    <>
      <QuestionCard openDrawer={!!match} />
      <MessageDrawer open={!!match}>
        {!!match && <QuestionDetails id={match.params.id as string} />}
      </MessageDrawer>
    </>
  );
};
