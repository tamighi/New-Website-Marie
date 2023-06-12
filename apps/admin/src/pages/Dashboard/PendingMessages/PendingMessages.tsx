import { Card, Divider, HelpIcon } from "lib";

import PendingMessageList from "./PendingMessageList";

import styles from "./PendingMessages.css"

const PendingMessages = () => {
  return (
    <Card>
      <div className={styles.PendingMessages}>
        <HelpIcon />
        <h2>Messages en attente</h2>
      </div>
      <Divider />
      <PendingMessageList/>
    </Card>
  );
};

export default PendingMessages;
