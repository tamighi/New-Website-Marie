import { useStyles } from "lib";
import styles from "./Typography.css";

export const Title = ({ children }: { children: React.ReactNode }) => {
  const themeStyle = useStyles({ color: "secondary" });
  return (
    <h2
      style={{ borderBottomColor: themeStyle.color }}
      className={styles.Title}
    >
      {children}
    </h2>
  );
};
