import React from "react";

declare module "react" {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

type TextAreaProps<T extends object> =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: keyof T;
  };

export const TextArea = <T extends object>(
  props: TextAreaProps<T>,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
  return <textarea {...props} ref={ref} />;
};

export default React.forwardRef(TextArea);
