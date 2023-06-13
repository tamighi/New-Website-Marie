import { useGetList } from "hooks";
import { Card, Divider, HelpIcon } from "lib";

import PendingMessageHeader from "./PendingMessageHeader";

const PendingQuestions = () => {
  const { data } = useGetList<"question">("question", {
    filter: {
      status: "pending",
    },
  });

  return (
    <Card>
      <PendingMessageHeader Icon={HelpIcon} title="Questions en attentes" />
      <Divider />
      {data?.data.map((question) => {
        return (
          <div key={question.name}>
            <p>{question.name}</p>
            <p>{question.message}</p>
          </div>
        );
      })}
    </Card>
  );
};

export default PendingQuestions;
