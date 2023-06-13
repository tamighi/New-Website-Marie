import { useGetList } from "hooks";
import { Card, Divider, HelpIcon } from "lib";
import { useNavigate } from "react-router-dom";

import PendingMessageHeader from "./PendingMessageHeader";

import styles from "./PendingMessages.css";

const PendingReviews = () => {
  const navigate = useNavigate();
  const { data } = useGetList<"review">("review", {
    filter: {
      status: "pending",
    },
  });

  return (
    <Card style={{ maxWidth: "500px", padding: 0 }}>
      <PendingMessageHeader Icon={HelpIcon} title="Avis en attentes" />
      <Divider />
      {data?.data.map((review) => {
        return (
          <div
            key={review.name}
            className={styles.PendingMessage}
            onClick={() => navigate(`/review/${review.id}`)}
          >
            <p className={styles.PendingMessageTitle}>{review.name}</p>
            <p className={styles.PendingMessageText}>{review.message}</p>
          </div>
        );
      })}
    </Card>
  );
};

export default PendingReviews;
