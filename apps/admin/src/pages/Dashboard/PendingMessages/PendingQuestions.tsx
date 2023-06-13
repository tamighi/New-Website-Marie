import { useGetList } from "hooks";
import { Card, Divider, HelpIcon } from "lib";
import { useNavigate } from "react-router-dom";

import PendingMessageHeader from "./PendingMessageHeader";

import styles from "./PendingMessages.css";

const PendingQuestions = () => {
  const navigate = useNavigate();
  const { data } = useGetList<"question">("question", {
    filter: {
      status: "pending",
    },
  });

  return (
    <Card style={{ maxWidth: "500px", padding: 0 }}>
      <PendingMessageHeader Icon={HelpIcon} title="Questions en attentes" />
      <Divider />
      {data?.data.map((question) => {
        return (
          <div
            key={question.name}
            className={styles.PendingMessage}
            onClick={() => navigate(`/question/${question.id}`)}
          >
            <p className={styles.PendingMessageTitle}>{question.name}</p>
            <p className={styles.PendingMessageText}>{question.message}</p>
          </div>
        );
      })}
    </Card>
  );
};

export default PendingQuestions;
