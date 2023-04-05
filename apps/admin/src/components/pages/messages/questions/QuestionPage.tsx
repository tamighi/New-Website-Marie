import { matchPath, useLocation } from "react-router-dom";
import { QuestionCard } from "./QuestionCard";
import { QuestionDrawer } from "./QuestionDrawer";

export const QuestionPage = () => {
  const location = useLocation();

  const match = matchPath("/questions/:id", location.pathname);

  return (
    <>
      <QuestionCard openDrawer={!!match} />
      <QuestionDrawer />
    </>
  );
};
