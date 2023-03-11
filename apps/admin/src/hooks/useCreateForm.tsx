import { useCreate } from "hooks/useData";
import { useDialog, useForm } from "lib";
import { useFormErrorHandler } from "./useFormErrorHandler";

interface CreateOptions<T extends object> {
  defaultData?: {
    [K in keyof T]?: T[K];
  };
}

export const useCreateForm = <T extends object>(
  ressource: string,
  createOptions?: CreateOptions<T>
) => {
  const { errors, setError, resetErrors } = useFormErrorHandler();
  const { showDialog } = useDialog();
  const { register, handleSubmit, reset } = useForm<T>();

  const { mutate, isLoading } = useCreate(ressource, {
    onSuccess: () => {
      showDialog?.({ content: "Item created !" });
      reset();
      resetErrors();
    },
    onError: () => setError("badEntry"),
  });

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    mutate({ data: { ...data, ...createOptions?.defaultData } });
  });

  return { register, onSubmit, isLoading, errors };
};
