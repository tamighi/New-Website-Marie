import React from "react";
import { Leaves } from "./types";
import { addValueToData } from "./utils";

type InputElements = HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement;

type UncontrolledRegisterOptions = {};

type PartialMapToRefs<T extends object> = {
  [k in Leaves<T>]?: React.RefObject<InputElements>;
};

type MergeUncontrolledInputs<T extends object> = (
  initial: Partial<T>
) => Partial<T>;

export type UncontrolledRegisterReturn  ={
  name: string;
  ref: React.RefObject<InputElements> | undefined;
}

export type UncontrolledRegister<T extends object> = (
  name: Leaves<T>,
  options?: UncontrolledRegisterOptions
) => UncontrolledRegisterReturn;

type UseUncontrolledFormReturn<T extends object> = {
  register: UncontrolledRegister<T>;
  reset: () => void;
  mergeUncontrolledInputs: MergeUncontrolledInputs<T>;
}

// TODO: Refactorisation
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

  // TODO: onSubmit and merge => get
  const mergeUncontrolledInputs = React.useCallback<MergeUncontrolledInputs<T>>(
    (initial: Partial<T>) => {
      const data = Object.keys(inputRefs).reduce((result, key) => {
        const value = inputRefs[key as Leaves<T>]?.current?.value;
        addValueToData(result, key, value);
        return result;
      }, initial);

      return data;
    },
    []
  );

  return { register, mergeUncontrolledInputs, reset };
};
