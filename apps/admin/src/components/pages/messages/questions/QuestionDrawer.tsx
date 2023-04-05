import { RightDrawer } from "components/pages/core";
import { useGetOne } from "hooks";
import { matchPath, useLocation } from "react-router-dom";
import { MessageDetails } from "../common/MessageDetails"
import { isQuestion } from "./questions";

export const QuestionDrawer = () => {
  const { data } = useGetOne("questions", { id: 1 });

  const location = useLocation();

  const match = matchPath("/questions/:id", location.pathname);

  if (!data || !isQuestion(data.data)) {
    return null;
  }
  return (
    <RightDrawer open={!!match}>
      <MessageDetails message={data.data} />
    </RightDrawer>
  );
};
