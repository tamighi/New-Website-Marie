import React from "react";
import { HttpError } from "api/utils";
import { useDialog, useForm } from "lib";
import { useNavigate } from "react-router-dom";
import { useDeleteOne, useGetOne, useUpdateOne } from "./useData";
import { useFormErrorHandler } from "./useFormErrorHandler";

export const useEditForm = <T extends object>(
  ressource: string,
  id: number | string
) => {
  const { errors, resetErrors, setError } = useFormErrorHandler();
  const { showDialog } = useDialog();
  const { register, handleSubmit } = useForm<T>();
  const navigate = useNavigate();

  React.useEffect(() => {
    resetErrors();
  }, [id, resetErrors]);

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

  const { mutate: updateMutation, isLoading: isUpdateLoading } = useUpdateOne(
    ressource,
    {
      onSuccess: () => {
        showDialog?.({ content: "Item updated !" });
      },
      onError: onMutationError,
    }
  );

  const { mutate: deleteMutation, isLoading: isDeleteLoading } = useDeleteOne(
    ressource,
    {
      onSuccess: () => {
        showDialog?.({ content: "Item deleted !" });
        navigate(-1);
      },
      onError: onMutationError,
    }
  );

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    updateMutation({ data, id });
  });

  const onDelete = () => {
    deleteMutation({ id });
  };

  return {
    register,
    onSubmit,
    onDelete,
    isMutateLoading: isUpdateLoading || isDeleteLoading,
    error: errors,
    setError,
  };
};
