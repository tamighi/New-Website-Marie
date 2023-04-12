import React from "react";

import { Leaves } from "./types";

type ControlledRegisterOptions = {
  onChange: (value: string) => void;
};

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

type GetControlledInputs<T extends object> = () => {
  [k in Leaves<T>]?: string;
};

export type UseControlledFormReturn<T extends object> = {
  register: ControlledRegisterFunction<T>;
  reset: () => void;
  getControlledInputs: GetControlledInputs<T>;
};

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

  const getControlledInputs = () => {
    return Object.keys(controlledInputs).reduce((data, key) => {
      return {
        ...data,
        [key]: controlledInputs[key as Leaves<T>],
      };
    }, {});
  };

  return { register, getControlledInputs, reset };
};
