import React from "react";

import { useStyles } from "library";
import { Colors } from "../..";

import CSSClasses from "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof Colors;
  variant?: "text" | "contained"
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
    variant = "text",
    ...rest
  } = props;

  const classNames = `${CSSClasses.Button} ` + (className || "");

  const styles = useStyles({
    type: variant === "contained" ? color : "transparent",
    customStyle,
    color: variant === "contained"? "text" : color,
  });

  return (
    <button style={styles} className={classNames} ref={ref} {...rest}>
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
