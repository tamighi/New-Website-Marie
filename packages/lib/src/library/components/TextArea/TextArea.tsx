import React from "react";

import { Colors, useStyles } from "library";

import CSSClasses from "./TextArea.css";

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "color"> {
  color?: keyof Colors;
}

const TextArea = (
  props: TextAreaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
  const { style: customStyle, className, color = "text", ...rest } = props;

  const classNames = `${CSSClasses.TextArea} ` + (className || "");

  const styles = useStyles({
    type: "surface",
    customStyle,
    color,
  });

  return <textarea style={styles} className={classNames} ref={ref} {...rest} />;
};

export default React.forwardRef(TextArea);
