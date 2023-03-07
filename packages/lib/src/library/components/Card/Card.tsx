import { useStyles } from "../../hooks";

import CSSClasses from "./Card.css";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = (props: CardProps) => {
  const { style, children, className, ...rest } = props;

  const classNames = `${CSSClasses.Card} ` + (className || "");

  const styles = {
    ...useStyles("background"),
    ...style,
  };

  return (
    <div className={classNames} style={styles} {...rest}>
      {children}
    </div>
  );
};

export default Card;
