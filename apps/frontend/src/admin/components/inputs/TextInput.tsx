import React from "react";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = (
  props: TextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return <input {...props} ref={ref} />;
};

export default React.forwardRef(TextInput)
