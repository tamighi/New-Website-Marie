import { useCreateRef } from "hooks";
import { useDialog, useForm } from "lib";
import { useFormErrorHandler } from "./useFormErrorHandler";

interface CreateRefOptions<T extends object> {
  defaultData: {
    [K in keyof T]: { id: string | number };
  };
  parentResource: string;
}

export const useCreateRefForm = <T extends object>(
  resource: string,
  options: CreateRefOptions<T>
) => {
  const { errors, setError, resetErrors } = useFormErrorHandler();
  const { showDialog } = useDialog();
  const { register, handleSubmit, reset } = useForm<T>();

  const { mutate, isLoading } = useCreateRef(resource, {
    onSuccess: () => {
      showDialog?.({ content: "Item created !" });
      reset();
      resetErrors();
    },
    onError: () => setError("badEntry"),
    parentResource: options.parentResource,
  });

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    mutate({ data: { ...data, ...options.defaultData } });
  });

  return { register, onSubmit, isLoading, error: errors };
};
