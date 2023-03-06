import { useCreate } from "admin/hooks/useData";
import { useDialog, useForm } from "lib";

export const useCreateForm = <T extends object>(ressource: string) => {
  const create = useCreate(ressource);
  const { showDialog } = useDialog();
  const { register, handleSubmit, reset } = useForm<T>();

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    await create({ data });
    showDialog?.({ content: "Item created !" });
    reset();
  });

  return { register, onSubmit };
};
