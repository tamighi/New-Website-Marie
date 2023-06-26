import { Alert } from "components";
import { useCreate } from "hooks";
import { useAlert, useForm } from "lib";
import { ResourceString } from "types";
import { useFormErrorHandler } from "./useFormErrorHandler";

export const useCreateForm = <T extends object>(resource: ResourceString) => {
  const { errors, setError, resetErrors } = useFormErrorHandler();
  const alert = useAlert();
  const { register, handleSubmit, reset } = useForm<T>();

  const { mutate, isLoading } = useCreate(resource, {
    onSuccess: () => {
      alert.show({ render: <Alert message="Item créé !" /> });
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
