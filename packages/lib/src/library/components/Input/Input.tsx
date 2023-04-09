import React from "react";

import { Colors, useStyles } from "library";

import CSSClasses from "./Input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: keyof Colors;
  flex?: boolean;
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
    placeholder,
    ...rest
  } = props;

  const classNames =
    `${CSSClasses.Input} ${flex ? CSSClasses.InputFlex : ""} ` + className;

  const styles = useStyles({
    type: "surface",
    customStyle,
    color,
  });

  return (
    <div className={CSSClasses.InputContainer}>
      <input
        placeholder=""
        style={styles}
        className={classNames}
        ref={ref}
        {...rest}
      />
      <label style={{ color: styles.color }} className={CSSClasses.Label}>
        {placeholder}
      </label>
    </div>
  );
};

export default React.forwardRef(Input);
