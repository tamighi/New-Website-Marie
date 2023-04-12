import React from "react";
import { Leaves } from "./types";

// TODO: Same in controlled and uncontrolled
type GetUncontrolledInputs<T extends object> = () => {
  [k in Leaves<T>]?: string;
};

export type UncontrolledRegisterReturn = {
  name: string;
  ref: React.RefObject<InputElements> | undefined;
};

export type UncontrolledRegister<T extends object> = (
  name: Leaves<T>,
  options?: UncontrolledRegisterOptions
) => UncontrolledRegisterReturn;

type UseUncontrolledFormReturn<T extends object> = {
  register: UncontrolledRegister<T>;
  reset: () => void;
  getUncontrolledInputs: GetUncontrolledInputs<T>;
};

type InputElements = HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement;

type UncontrolledRegisterOptions = {};

type PartialMapToRefs<T extends object> = {
  [k in Leaves<T>]?: React.RefObject<InputElements>;
};

export const useUncontrolledForm = <
  T extends object
>(): UseUncontrolledFormReturn<T> => {
  const [inputRefs, setInputRefs] = React.useState<PartialMapToRefs<T>>({});

  const register = React.useCallback<UncontrolledRegister<T>>(
    (name, _options = {}) => {
      let ref = inputRefs[name];
      if (!ref) {
        ref = React.createRef<InputElements>();
        setInputRefs((prevInputRefs) => ({ ...prevInputRefs, [name]: ref }));
      }

      const inputProps = {
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

  const getUncontrolledInputs = () => {
    return Object.keys(inputRefs).reduce((data, key) => {
      return {
        ...data,
        [key]: inputRefs[key as Leaves<T>]?.current?.value,
      };
    }, {});
  };

  return { register, getUncontrolledInputs, reset };
};
