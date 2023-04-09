import React from "react";

import { Colors, InputBase, useStyles } from "library";

import CSSClasses from "../Input/Input.css";

export interface TextAreaProps
  extends Omit<React.HTMLAttributes<HTMLTextAreaElement>, "color"> {
  color?: keyof Colors;
  flex?: boolean;
  label?: string;
}

const TextArea = (
  props: TextAreaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
  const {
    style: customStyle,
    className = "",
    color = "text",
    flex = false,
    placeholder = "",
    label,
    ...rest
  } = props;

  const classNames = `${CSSClasses.Input} ` + className;

  const styles = useStyles({
    type: "surface",
    customStyle,
    color,
  });

  return (
    <InputBase color={styles.color} flex={flex} label={label}>
      <textarea
        placeholder={placeholder}
        style={styles}
        className={classNames}
        ref={ref}
        {...rest}
      />
    </InputBase>
  );
};

export default React.forwardRef(TextArea);
