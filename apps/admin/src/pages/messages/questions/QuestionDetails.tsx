import { useGetCurrentQuery, useGetOne } from "hooks";
import { MessageDetails } from "../common";

const QuestionDetails = ({ id }: { id: number | string }) => {
  const query = useGetCurrentQuery();
  const { data } = useGetOne("question", { id }, query);
  if (!data) {
    return null;
  }
  return <MessageDetails message={data.data} />;
};

export default QuestionDetails;
