import React from "react";

interface InputRegister {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputMap {
  [key: string]: InputRegister;
}

export const useForm = () => {
  const [inputs, setInputs] = React.useState<InputMap>({});

  const setInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: { ...prevInputs[name], value: value },
    }));
  };

  const register = (name: string) => {
    if (inputs[name]) {
      return inputs[name];
    }

    const inputProps = { name: name, value: "", onChange: setInputValue };

    setInputs((prevInputs) => ({ ...prevInputs, [name]: inputProps }));

    return inputProps;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(inputs);
    event.preventDefault();
  };

  return { register, onSubmit };
};
