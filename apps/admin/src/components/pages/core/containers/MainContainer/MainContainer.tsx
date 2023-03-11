import { Card, CardProps } from "lib";
import styles from "./MainContainer.css";

export const MainContainer = (props: CardProps) => {
  const { children, ...rest } = props;
  return (
    <Card className={styles.MainContainer} {...rest}>
      {children}
    </Card>
  );
};
