import { useDialog, useForm } from "lib";
import { useGetOne, useUpdateOne } from "./useData";

export const useEditForm = <T extends object>(
  ressource: string,
  id: string
) => {
  const { register, handleSubmit } = useForm<T>();
  const { showDialog } = useDialog();

  const { data } = useGetOne("service", { id });

  const { mutate } = useUpdateOne(ressource, {
    onSuccess: () => showDialog?.({ content: "Item updated !" }),
  });

  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    mutate({ data, id });
  });

  return { register, data, onSubmit };
};
