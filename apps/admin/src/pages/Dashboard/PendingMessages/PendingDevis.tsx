import { useGetList } from "hooks";
import { Card, Divider, HelpIcon } from "lib";
import { useNavigate } from "react-router-dom";

import PendingMessageHeader from "./PendingMessageHeader";

import styles from "./PendingMessages.css";

const PendingDevis = () => {
  const navigate = useNavigate();
  const { data } = useGetList<"devis">("devis", {
    filter: {
      status: "pending",
    },
  });

  return (
    <Card className={styles.PendingMessagesCard}>
      <PendingMessageHeader Icon={HelpIcon} title="Devis en attentes" />
      <Divider />
      {data?.data.map((devis) => {
        return (
          <div
            key={devis.name}
            className={styles.PendingMessage}
            onClick={() => navigate(`/devis/${devis.id}`)}
          >
            <p className={styles.PendingMessageTitle}>{devis.name}</p>
            <p className={styles.PendingMessageText}>{devis.message}</p>
          </div>
        );
      })}
    </Card>
  );
};

export default PendingDevis;
