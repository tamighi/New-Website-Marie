import { useCreate } from "admin/hooks/useData";
import { useDialog, useForm } from "lib";
import { useFormErrorHandler } from "./useFormErrorHandler";

export const useCreateForm = <T extends object>(ressource: string) => {
  const { errors, setError, resetErrors } = useFormErrorHandler();
  const { showDialog } = useDialog();
  const { register, handleSubmit, reset } = useForm<T>();

  const { mutate } = useCreate(ressource, {
    onSuccess: () => {
      showDialog?.({ content: "Item created !" });
      reset();
      resetErrors();
    },
    onError: () => setError("badEntry")
  });

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    mutate({ data });
  });

  return { register, onSubmit, errors };
};
