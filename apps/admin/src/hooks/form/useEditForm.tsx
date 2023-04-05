import React from "react";
import { HttpError } from "api/utils";
import { useDialog, useForm } from "lib";
import { useFormErrorHandler, useUpdateOne } from "hooks";
import { ResourceString } from "api/dataProvider";

export const useEditForm = <T extends object>(
  ressource: ResourceString,
  id: number | string
) => {
  const { errors, resetErrors, setError } = useFormErrorHandler();
  const { showDialog } = useDialog();
  const { register, handleSubmit } = useForm<T>();

  React.useEffect(() => {
    resetErrors();
  }, [id, resetErrors]);

  const onError = React.useCallback(
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
    onError,
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
