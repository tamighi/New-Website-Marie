import React, { RefObject } from "react";

type InputElements = HTMLInputElement & HTMLTextAreaElement;

interface InputProps {
  name: string;
  ref: RefObject<InputElements>;
}

type PartialMapTRefs<T> = {
  [K in keyof T]?: RefObject<InputElements>;
};

export const useForm = <T,>() => {
  const [inputRefs, setInputRefs] = React.useState<PartialMapTRefs<T>>({});

  const register = React.useCallback(
    (name: keyof T & string) => {
      let ref = inputRefs[name];
      if (!ref) {
        ref = React.createRef<InputElements>();
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

  const handleSubmit = (onSubmit: (data: T) => void) => {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!inputRefs) {
        return;
      }
      const data = Object.keys(inputRefs).reduce(
        (result, name) => ({
          ...result,
          [name]: inputRefs[name as keyof T]?.current?.value || "",
        }),
        {} as T
      );
      onSubmit(data);
    };
  };

  return { register, handleSubmit };
};
