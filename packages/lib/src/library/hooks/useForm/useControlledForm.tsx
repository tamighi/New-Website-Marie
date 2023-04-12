import React from "react";

import { Leaves } from "./types";
import { addValueToData } from "./utils";

type ControlledRegisterOptions = {
  onChange: (value: string) => void;
}

type PartialMapToControlledInput<T extends object> = {
  [k in Leaves<T>]?: string;
};

export type ControlledRegisterReturn = {
  name: string;
  onChange: (event: any) => void;
};

type ControlledRegisterFunction<T extends object> = (
  name: Leaves<T>,
  options: ControlledRegisterOptions
) => ControlledRegisterReturn;

type GetControlledInputs<T extends object> = (
  initial: Partial<T>
) => Partial<T>;

export type UseControlledFormReturn<T extends object> = {
  register: ControlledRegisterFunction<T>;
  reset: () => void;
  mergeControlledInputs: GetControlledInputs<T>;
}

export const useControlledForm = <
  T extends object
>(): UseControlledFormReturn<T> => {
  const [controlledInputs, setControlledInputs] = React.useState<
    PartialMapToControlledInput<T>
  >({});

  const register = React.useCallback<ControlledRegisterFunction<T>>(
    (name, options) => {
      const { onChange } = options;
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
    },
    []
  );

  // TODO: keep onChanges for reset
  const reset = () => {};

  // TODO: onSubmit and merge => get
  const mergeControlledInputs = React.useCallback<GetControlledInputs<T>>(
    (initial: Partial<T>) => {
      const data = Object.keys(controlledInputs).reduce((result, key) => {
        const value = controlledInputs[key as Leaves<T>];
        addValueToData(result, key, value);
        return result;
      }, initial);

      return data;
    },
    [controlledInputs]
  );

  return { register, mergeControlledInputs, reset };
};
