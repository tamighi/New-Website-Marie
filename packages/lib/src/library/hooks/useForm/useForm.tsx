import React from "react";
import { Leaves } from "./types";
import {
  ControlledRegisterReturn,
  useControlledForm,
} from "./useControlledForm";
import {
  UncontrolledRegisterReturn,
  useUncontrolledForm,
} from "./useUncontrolledForm";
import { addValueToData } from "./utils";

// TODO: Clean types
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
    getUncontrolledInputs,
  } = useUncontrolledForm<T>();
  const {
    register: controlledRegister,
    reset: controlledReset,
    getControlledInputs,
  } = useControlledForm<T>();

  const register: RegisterFunction<T> = (name, options = {}) => {
    const { onChange } = options;
    if (onChange) {
      return controlledRegister(name, { onChange, ...options });
    } else {
      return uncontrolledRegister(name, options);
    }
  };

  const reset = () => {
    controlledReset();
    unControlledReset();
  };

  const handleSubmit = (onSubmit: (data: Partial<T>) => void) => {
    return (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
      event.preventDefault();

      const inputs = {
        ...getUncontrolledInputs(),
        ...getControlledInputs(),
      };

      let data = Object.keys(inputs).reduce((result, key) => {
        addValueToData(result, key, inputs[key as Leaves<T>]);
        return result;
      }, {});

      onSubmit(data);
    };
  };

  return { register, handleSubmit, reset };
};

export default useForm;
