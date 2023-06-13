import styles from "./PendingMessages.css";

interface PendingMessageHeaderProps {
  Icon: React.FC;
  title: string;
}

const PendingMessageHeader = (props: PendingMessageHeaderProps) => {
  const { Icon, title } = props;
  return (
    <div className={styles.PendingMessages}>
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default PendingMessageHeader;
