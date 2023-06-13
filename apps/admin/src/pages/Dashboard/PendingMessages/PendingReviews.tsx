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
    <Card className={styles.PendingMessagesCard}>
      <PendingMessageHeader Icon={HelpIcon} title="Avis en attente" />
      <Divider />
      {data && data.data.length > 0 ? (
        data.data.map((review) => {
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
        })
      ) : (
        <p>Aucun avis en attente</p>
      )}
    </Card>
  );
};

export default PendingReviews;
