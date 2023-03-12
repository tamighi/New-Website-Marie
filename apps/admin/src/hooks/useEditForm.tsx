import React from "react";
import { HttpError } from "api/utils";
import { useDialog, useForm } from "lib";
import { useUpdateOne } from "./useData";
import { useFormErrorHandler } from "./useFormErrorHandler";

export const useEditForm = <T extends object>(
  ressource: string,
  id: number | string
) => {
  const { errors, resetErrors, setError } = useFormErrorHandler();
  const { showDialog } = useDialog();
  const { register, handleSubmit } = useForm<T>();

  React.useEffect(() => {
    resetErrors();
  }, [id, resetErrors]);

  const onMutationError = React.useCallback(
    (error: unknown) => {
      if (error instanceof HttpError) {
        setError("badEntry");
      } else {
        setError("unknownError");
      }
    },
    [setError]
  );

  const { mutate } = useUpdateOne(ressource, {
    onSuccess: () => {
      showDialog?.({ content: "Item updated !" });
    },
    onError: onMutationError,
  });

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    mutate({ data, id });
  });

  return {
    register,
    onSubmit,
    error: errors,
    setError,
  };
};
