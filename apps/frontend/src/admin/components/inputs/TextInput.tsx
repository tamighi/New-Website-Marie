import React from "react";

declare module "react" {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

type TextInputProps<T extends object> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    name: keyof T;
  };

const TextInput = <T extends object>(
  props: TextInputProps<T>,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return <input {...props} ref={ref} />;
};

export default React.forwardRef(TextInput);
