import React from "react";

import { Colors, useStyles } from "library";

import CSSClasses from "./Input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: keyof Colors;
}

const Input = (
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const { style: customStyle, className, color = "text", ...rest } = props;

  const classNames = `${CSSClasses.Input} ` + (className || "");

  const styles = useStyles({
    type: "surface",
    customStyle,
    color,
  });

  return <input style={styles} className={classNames} ref={ref} {...rest} />;
};

export default React.forwardRef(Input);
