import styles from "../../typography/Typography.css";

export const Copyrights = () => {
  return (
    <span className={styles.Copyright}>
      {"Copyright © Thomas Amighi "}
      {new Date().getFullYear()}.
    </span>
  );
};
