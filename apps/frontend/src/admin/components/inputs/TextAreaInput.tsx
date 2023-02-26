import React from "react";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return <textarea {...props} ref={ref} />;
  }
);

TextArea.displayName = "TextArea";
