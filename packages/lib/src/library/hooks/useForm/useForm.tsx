import React from "react";
import { Leaves } from "./types";
import { ControlledRegisterReturn, useControlledForm } from "./useControlledForm";
import { UncontrolledRegisterReturn, useUncontrolledForm } from "./useUncontrolledForm";

interface RegisterOptions {
  onChange?: (value: string) => void;
}

type RegisterFunction<T extends object> = (
  name: Leaves<T>,
  options?: RegisterOptions
) => ControlledRegisterReturn | UncontrolledRegisterReturn;

type HandleSubmitFunction<T extends object> = (
  onSubmit: (data: Partial<T>) => void
) => (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;

interface UseFormReturn<T extends object> {
  register: RegisterFunction<T>;
  reset: () => void;
  handleSubmit: HandleSubmitFunction<T>;
}

const useForm = <T extends object>(): UseFormReturn<T> => {
  const {
    register: uncontrolledRegister,
    reset: unControlledReset,
    mergeUncontrolledInputs,
  } = useUncontrolledForm<T>();
  const {
    register: controlledRegister,
    reset: controlledReset,
    mergeControlledInputs,
  } = useControlledForm<T>();

  const register = React.useCallback<RegisterFunction<T>>(
    (name, options = {}) => {
      const { onChange } = options;
      if (onChange) {
        return controlledRegister(name, { onChange, ...options });
      } else {
        return uncontrolledRegister(name, options);
      }
    },
    []
  );

  const reset = () => {
    controlledReset();
    unControlledReset();
  };

  const handleSubmit = (onSubmit: (data: Partial<T>) => void) => {
    return (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
      event.preventDefault();

      let data = mergeUncontrolledInputs({});
      data = mergeControlledInputs(data);

      onSubmit(data);
    };
  };

  return { register, handleSubmit, reset };
};

export default useForm;
