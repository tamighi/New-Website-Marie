import { useCreate } from "hooks";
import { useDialog, useForm } from "lib";
import { useFormErrorHandler } from "./useFormErrorHandler";

export const useCreateForm = <T extends object>(resource: string) => {
  const { errors, setError, resetErrors } = useFormErrorHandler();
  const { showDialog } = useDialog();
  const { register, handleSubmit, reset } = useForm<T>();

  const { mutate, isLoading } = useCreate(resource, {
    onSuccess: () => {
      showDialog?.({ content: "Item created !" });
      reset();
      resetErrors();
    },
    onError: () => setError("badEntry"),
  });

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    mutate({ data });
  });

  return { register, onSubmit, isLoading, error: errors };
};
