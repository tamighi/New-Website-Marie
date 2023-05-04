import { Card, CardProps } from "lib";
import styles from "./SecondaryCard.css";

export const SecondaryCard = (props: CardProps) => {
  const { children, ...rest } = props;
  return (
    <Card className={styles.SecondaryCard} {...rest}>
      {children}
    </Card>
  );
};
