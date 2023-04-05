import { useGetOne } from "hooks";
import { MessageDetails } from "../common/MessageDetails";
import { isQuestion } from "./questions";

export const QuestionDetails = ({ id }: { id: number | string }) => {
  const { data } = useGetOne("question", { id });
  if (!data || !isQuestion(data.data)) {
    return null;
  }
  return <MessageDetails message={data.data} />
};
