import React from "react";

type KeyError = "unknownError" | "badEntry";

type FormError = {
  [k in KeyError]: boolean;
};

const initialErrors: FormError = {
  unknownError: false,
  badEntry: false,
};

export const useFormErrorHandler = () => {
  const [errors, setErrors] = React.useState<FormError>(initialErrors);

  const resetErrors = React.useCallback(() => {
    setErrors(initialErrors);
  }, []);

  const setError = React.useCallback((error: KeyError) => {
    setErrors((prev) => {
      return { ...prev, [error]: true };
    });
  }, []);

  return { errors, setError, resetErrors };
};
