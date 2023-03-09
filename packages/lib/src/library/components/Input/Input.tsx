import React from "react";

import { useStyles } from "library";

import CSSClasses from "./Input.css";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const { style: customStyle, className, ...rest } = props;
  const classNames = `${CSSClasses.Input} ` + (className || "");

  const styles = useStyles({
    type: "surface",
    customStyle,
  });

  return <input style={styles} className={classNames} ref={ref} {...rest} />;
};

export default React.forwardRef(Input);
