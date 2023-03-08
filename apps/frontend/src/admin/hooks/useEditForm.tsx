import { HttpError } from "admin/api/utils";
import { useDialog, useForm } from "lib";
import React from "react";
import { useGetOne, useUpdateOne } from "./useData";
import { useFormErrorHandler } from "./useFormErrorHandler";

export const useEditForm = <T extends object>(
  ressource: string,
  id: string
) => {
  const { errors, resetErrors, setError } = useFormErrorHandler();
  const { register, handleSubmit } = useForm<T>();
  const { showDialog } = useDialog();

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

  const { data, isFetching } = useGetOne(
    "service",
    { id },
    { onError: onFetchingError }
  );

  const { mutate, isLoading } = useUpdateOne(ressource, {
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
    isFetching,
    isLoading,
    error: errors,
  };
};
