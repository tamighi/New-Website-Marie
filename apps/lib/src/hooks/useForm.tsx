import React, { RefObject } from "react";

type InputElements = HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement;

interface InputProps<T> {
  name: keyof T;
  ref: RefObject<InputElements>;
}

type PartialMapToRefs<T> = {
  [K in keyof T]?: RefObject<InputElements>;
};

const useForm = <T,>() => {
  const [inputRefs, setInputRefs] = React.useState<PartialMapToRefs<T>>({});

  const register = React.useCallback(
    (name: keyof T) => {
      let ref = inputRefs[name];
      if (!ref) {
        ref = React.createRef<InputElements>();
        setInputRefs((prevInputRefs) => ({ ...prevInputRefs, [name]: ref }));
      }

      const inputProps: InputProps<T> = {
        name: name,
        ref: ref,
      };

      return inputProps;
    },
    [inputRefs]
  );

  const reset = () => {
    for (const k in inputRefs) {
      const ref = inputRefs[k]?.current;
      if (ref) {
        ref.value = "";
      }
    }
  };

  const handleSubmit = (onSubmit: (data: T) => void) => {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = Object.keys(inputRefs).reduce(
        (result, key) => ({
          ...result,
          [key]: inputRefs[key as keyof T]?.current?.value || "",
        }),
        {} as T
      );
      onSubmit(data);
    };
  };

  return { register, handleSubmit, reset };
};

export default useForm;
