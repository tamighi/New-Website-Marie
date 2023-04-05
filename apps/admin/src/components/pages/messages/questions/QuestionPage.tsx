import { matchPath, useLocation } from "react-router-dom";
import { QuestionCard } from "./QuestionCard";
import { QuestionDrawer, QuestionDrawerProps } from "./QuestionDrawer";

export const QuestionPage = () => {
  const location = useLocation();

  const match = matchPath("/question/:id", location.pathname);

  const questionDrawerProps: QuestionDrawerProps = match
    ? { open: true, id: match.params.id as string }
    : { open: false, id: undefined };

  return (
    <>
      <QuestionCard openDrawer={!!match} />
      <QuestionDrawer {...questionDrawerProps}/>
    </>
  );
};
