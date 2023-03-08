import { HttpError } from "admin/api/utils";
import { useDialog, useForm } from "lib";
import React from "react";
import { useGetOne, useUpdateOne } from "./useData";

export const useEditForm = <T extends object>(
  ressource: string,
  id: string
) => {
  const [badEntries, setBadEntries] = React.useState(false);
  const [unknownError, setUnknownError] = React.useState(false);
  const { register, handleSubmit } = useForm<T>();
  const { showDialog } = useDialog();

  React.useEffect(() => {
    setBadEntries(false);
    setUnknownError(false);
  }, [id]);

  const onFetchingError = React.useCallback((error: unknown) => {
    console.log(error);
    setUnknownError(true);
  }, []);

  const onMutationError = React.useCallback((error: unknown) => {
    console.log(error);
    if (error instanceof HttpError) {
      setBadEntries(true);
    } else {
      setUnknownError(true);
    }
    setUnknownError(true);
  }, []);

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
    badEntries,
    unknownError,
  };
};
