import { useGetOne } from "hooks";
import { MessageDetails } from "../common/MessageDetails";

export const QuestionDetails = ({ id }: { id: number | string }) => {
  const { data } = useGetOne("question", { id });
  if (!data) {
    return null;
  }
  return <MessageDetails message={data.data} />
};
