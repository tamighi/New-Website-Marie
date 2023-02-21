import { useStyles } from "../../hooks";
import { DefaultProps } from "..";

import CSSClasses from "./Card.css";

export type CardProps = DefaultProps;

const Card = (props: CardProps) => {
  const { style, children, className } = props;

  const classNames = `${CSSClasses.Card} ` + (className || "");

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
