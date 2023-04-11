import React, { RefObject } from "react";

type InputElements = HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement;

// TODO: Understand + adapt
type Join<K, P> = K extends string | number
  ? P extends string | number
  ? `${K}${"" extends P ? "" : "."}${P}`
  : never
  : never;

// Prevent infinite type instanciation
type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

type Leaves<T, D extends number = 2> = [D] extends [never]
  ? never
  : T extends object
  ? // What is "-?" ?
  { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : "";

interface InputProps<T> {
  name: Leaves<T>;
  ref: RefObject<InputElements>;
}

interface RegisterOptions {
  onChange?: (value: string) => void;
}

type PartialMapToControlledInput<T extends object> = {
  [k in Leaves<T>]?: string;
};

type PartialMapToRefs<T extends object> = {
  [k in Leaves<T>]?: RefObject<InputElements>;
};

const useForm = <T extends object>() => {
  const [inputRefs, setInputRefs] = React.useState<PartialMapToRefs<T>>({});
  const [controlledInputs, setControlledInputs] = React.useState<
    PartialMapToControlledInput<T>
  >({});

  const register = React.useCallback(
    (name: Leaves<T>, options: RegisterOptions = {}) => {
      const { onChange } = options;
      if (onChange) {
        return {
          name,
          onChange: (event: any) => {
            setControlledInputs((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }));
            onChange(event.target?.value);
          },
        };
      }
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

      // TODO: Better typing
      const addValueToNestedObject = (
        object: any,
        key: string,
        value: unknown
      ) => {
        const propNames = key.split(".");

        let nestedObject = object as any;

        for (let i = 0; i < propNames.length - 1; i++) {
          const propName = propNames[i];

          nestedObject[propName] = nestedObject[propName] || {};

          nestedObject = nestedObject[propName];
        }

        nestedObject[propNames[propNames.length - 1]] =
          value === "" ? undefined : value;
      };

      let data = Object.keys(inputRefs).reduce((result, key) => {
        const value = inputRefs[key as Leaves<T>]?.current?.value;
        addValueToNestedObject(result, key, value);
        return result;
      }, {} as Partial<T>);

      data = Object.keys(controlledInputs).reduce((result, key) => {
        const value = controlledInputs[key as Leaves<T>];
        addValueToNestedObject(result, key, value);
        return result;
      }, data);

      onSubmit(data);
    };
  };

  return { register, handleSubmit, reset };
};

export default useForm;
