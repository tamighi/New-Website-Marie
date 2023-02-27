import React from "react";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {

    return <input {...props} ref={ref} />;
  }
);

TextInput.displayName = "TextInput"
