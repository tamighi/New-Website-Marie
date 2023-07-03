import React from "react";

import {  Color, useStyles } from "../..";

import CSSClasses from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  variant?: "text" | "contained";
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
    disabled = false,
    ...rest
  } = props;

  const [hover, setHover] = React.useState(false);

  const classNames = `${CSSClasses.Button} ` + (className || "");

  const styles = useStyles({
      customStyle,
    ...(variant === "contained" ? {
      background: disabled ? "disabled" : hover ? "hover" : color,
      color: "text"
    } : {
      background: (hover && !disabled)? "hover" : "transparent",
      color: disabled ? "disabled" : color,
    }),
  });

  return (
    <button
      style={styles}
      className={classNames}
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
