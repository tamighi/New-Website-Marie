import React from "react";

import { useStyles } from "library";
import { Colors } from "../..";

import CSSClasses from "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof Colors;
}

const Button = (
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const {
    style: customStyle,
    color = "primary",
    children,
    className,
    ...rest
  } = props;

  const classNames = `${CSSClasses.Button} ` + (className || "");

  const styles = useStyles({
    type: "transparent",
    customStyle,
    color,
  });

  styles.transition = styles.transition
    ? styles.transition + ", background-color 225ms"
    : "background-color 225ms";

  return (
    <button style={styles} className={classNames} ref={ref} {...rest}>
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
