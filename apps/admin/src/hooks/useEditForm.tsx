import { HttpError } from "api/utils";
import { useDialog, useForm } from "lib";
import React from "react";
import { useGetOne, useUpdateOne } from "./useData";
import { useFormErrorHandler } from "./useFormErrorHandler";

export const useEditForm = <T extends object>(
  ressource: string,
  id: string
) => {
  const { errors, resetErrors, setError } = useFormErrorHandler();
  const { showDialog } = useDialog();
  const { register, handleSubmit } = useForm<T>();

  React.useEffect(() => {
    resetErrors();
  }, [id, resetErrors]);

  const onFetchingError = React.useCallback(
    (error: unknown) => {
      console.log(error);
      setError("unknownError");
    },
    [setError]
  );

  const onMutationError = React.useCallback(
    (error: unknown) => {
      console.log(error);
      if (error instanceof HttpError) {
        setError("badEntry");
      } else {
        setError("unknownError");
      }
      setError("unknownError");
    },
    [setError]
  );

  const { data, isLoading: isFetchLoading } = useGetOne(
    "service",
    { id },
    { onError: onFetchingError }
  );

  const { mutate, isLoading: isUpdateLoading } = useUpdateOne(ressource, {
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
    data,
    onSubmit,
    isFetchLoading,
    isUpdateLoading,
    error: errors,
  };
};
