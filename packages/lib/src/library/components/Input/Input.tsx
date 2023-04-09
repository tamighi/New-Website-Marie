import React from "react";

import { Colors, InputBase, useStyles } from "library";

import CSSClasses from "./Input.css";

export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  color?: keyof Colors;
  flex?: boolean;
  label?: string;
}

const Input = (
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const {
    style: customStyle,
    className = "",
    color = "text",
    flex = false,
    label,
    placeholder = "",
    ...rest
  } = props;

  const classNames = `${CSSClasses.Input} ` + className;

  const styles = useStyles({
    type: "surface",
    customStyle,
    color,
  });

  return (
    <InputBase label={label} flex={flex} color={styles.color}>
      <input
        style={styles}
        placeholder={placeholder}
        className={classNames}
        ref={ref}
        {...rest}
      />
    </InputBase>
  );
};

export default React.forwardRef(Input);
