import React, { RefObject } from "react";

interface InputProps {
  name: string;
  ref: RefObject<HTMLInputElement>;
}

interface TypeMap<T> {
  [key: string]: T;
}

export const useForm = () => {
  const [inputRefs, setInputRefs] = React.useState<
    TypeMap<RefObject<HTMLInputElement>>
  >({});

  const register = React.useCallback(
    (name: string) => {
      let ref = inputRefs[name];
      if (!ref) {
        ref = React.createRef<HTMLInputElement>();
        setInputRefs((prevInputRefs) => ({ ...prevInputRefs, [name]: ref }));
      }

      const inputProps: InputProps = {
        name: name,
        ref: ref,
      };

      return inputProps;
    },
    [inputRefs]
  );

  const handleSubmit = <T,>(onSubmit: (data: T) => void) => {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = Object.entries(inputRefs).reduce(
        (result, [name, ref]) => ({
          ...result,
          [name]: ref.current?.value || "",
        }),
        {} as T
      );
      onSubmit(data);
    };
  };

  return { register, handleSubmit };
};
