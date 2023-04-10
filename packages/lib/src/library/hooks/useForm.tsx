import React, { RefObject } from "react";

type InputElements = HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement;

// TODO: Understand + adapt
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

// Prevent infinite type instanciation
type Prev = [ never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[] ];

type Leaves<T, D extends number = 2> = [D] extends [never]
  ? never
  : T extends object
  // What is "-?" ?
  ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : "";

interface InputProps<T> {
  name: Leaves<T>;
  ref: RefObject<InputElements>;
}

type PartialMapToRefs<T extends object> = {
  [k in Leaves<T>]?: RefObject<InputElements>;
};

const useForm = <T extends object>() => {
  const [inputRefs, setInputRefs] = React.useState<PartialMapToRefs<T>>({});

  const register = React.useCallback(
    (name: Leaves<T>) => {
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
      // TODO: As any ??
      const ref = (inputRefs as any)[k]?.current;
      if (ref) {
        ref.value = "";
      }
    }
  };

  const handleSubmit = (onSubmit: (data: Partial<T>) => void) => {
    return (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
      event.preventDefault();

      const data = Object.keys(inputRefs).reduce((result, key) => {

        const propNames  = key.split(".");

        // propNames is supposedly safe for indexing T (see Leaves<T>)
        let nestedObject = result as any;
        
        // Does not enter if only one key
        for (let i = 0; i < propNames.length - 1; i++) {
          const propName = propNames[i];

          nestedObject[propName] =
            nestedObject[propName] || {};

          nestedObject = nestedObject[propName];
        }
          const value = inputRefs[key as keyof T]?.current?.value;

        nestedObject[propNames[propNames.length - 1]] =
          value === "" ? undefined : value

        return result;

      }, {} as Partial<T>);

      onSubmit(data);
    };
  };

  return { register, handleSubmit, reset };
};

export default useForm;
