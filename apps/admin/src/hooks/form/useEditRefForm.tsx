import React from "react";
import { HttpError } from "api/utils";
import { useDialog, useForm } from "lib";
import { useFormErrorHandler } from "hooks";
import { useUpdateOneRef } from "hooks";
import { ResourceString } from "api/types";

interface EditRefFormOptions {
  parentResource: string;
}

export const useEditRefForm = <T extends object>(
  ressource: ResourceString,
  id: number | string,
  options: EditRefFormOptions
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

  const { mutate, isLoading } = useUpdateOneRef(ressource, {
    onSuccess: () => {
      showDialog?.({ content: "Item updated !" });
    },
    onError,
    parentResource: options.parentResource,
  });

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    mutate({ data, id });
  });

  return {
    register,
    onSubmit,
    isLoading,
    error: errors,
    setError,
  };
};
