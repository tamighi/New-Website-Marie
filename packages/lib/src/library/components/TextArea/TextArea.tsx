import React from "react";

import { Colors, useStyles } from "library";

import CSSClasses from "./TextArea.css";

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "color"> {
  color?: keyof Colors;
  flex?: boolean;
}

const TextArea = (
  props: TextAreaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
  const {
    style: customStyle,
    className,
    color = "text",
    flex = false,
    placeholder,
    ...rest
  } = props;

  const classNames =
    `${CSSClasses.TextArea} ${flex ? CSSClasses.TextAreaFlex : ""} ` +
    (className || "");

  const styles = useStyles({
    type: "surface",
    customStyle,
    color,
  });

  return (
    <div className={CSSClasses.TextAreaContainer}>
      <textarea
        placeholder=""
        style={styles}
        className={classNames}
        ref={ref}
        {...rest}
      />
      <label style={{ color: styles.color }} className={CSSClasses.Label}>
        {placeholder}
      </label>
    </div>)
};

export default React.forwardRef(TextArea);
