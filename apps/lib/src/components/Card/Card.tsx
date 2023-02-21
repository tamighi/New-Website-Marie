import { useStyles } from "../../hooks";
import { DefaultProps } from "..";

import "./Card.css";

export type CardProps = DefaultProps;

const Card = (props: CardProps) => {
  const { style, children, className } = props;

  const classNames = "Card " + (className || "");

  const styles = {
    ...useStyles("background"),
    ...style,
  };

  return (
    <div className={classNames} style={styles}>
      {children}
    </div>
  );
};

export default Card;
