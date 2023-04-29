import { ResourceType } from "api/types";
import styles from "./Message.css";

type MessageResourceString = "question" | "review" | "devis";

export type MessageDetailsProps<T extends ResourceType<MessageResourceString>> =
  {
    message: T;
  };

export const MessageDetails = <T extends ResourceType<MessageResourceString>>(
  props: MessageDetailsProps<T>
) => {
  const { message } = props;

  return (
    <p className={styles.MessageDetails}>
      <span className={styles.MessageInfos}>{message.name}<br/>{message.email}</span>
      {message.message}
      <br />
    </p>
  );
};
