import { useCreate } from "admin/hooks/useData";
import { useDialog, useForm } from "lib";

export const useCreateForm = <T extends object>(ressource: string) => {
  const { mutate } = useCreate(ressource, {
    onSuccess: () => {
      showDialog?.({ content: "Item created !" });
      reset();
    },
  });
  const { showDialog } = useDialog();
  const { register, handleSubmit, reset } = useForm<T>();

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    mutate({ data });
  });

  return { register, onSubmit };
};
