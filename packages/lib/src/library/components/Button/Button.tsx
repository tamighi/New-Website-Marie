import React from "react";

import { Colors, mergeStyles, useTheme } from "../..";

import CSSClasses from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof Colors;
  variant?: "text" | "contained";
}

const Button = (
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const {
    style: customStyle = {},
    color = "primary",
    children,
    className,
    variant = "text",
    disabled = false,
    ...rest
  } = props;

  const [hover, setHover] = React.useState(false);

  const classNames = `${CSSClasses.Button} ` + (className || "");

  const { palette, transition } = useTheme();

  const baseStyle: React.CSSProperties = {
    ...(variant === "contained"
      ? {
          background: disabled
            ? palette.actions.disabled
            : hover
            ? palette.actions.hover
            : palette.colors[color],
          color: "text",
        }
      : {
          background:
            hover && !disabled ? palette.actions.hover : "transparent",
          color: disabled ? palette.actions.disabled : color,
        }),
    transition,
  };

  const mergedStyle = mergeStyles(customStyle, baseStyle)

  return (
    <button
      style={mergedStyle}
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
