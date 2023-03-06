import { useDialog, useForm } from "lib";
import { useGetOne, useUpdateOne } from "./useData";

export const useEditForm = <T extends object>(
  ressource: string,
  id: string
) => {
  const { register, handleSubmit } = useForm<T>();
  const { showDialog } = useDialog();

  const updateOne = useUpdateOne(ressource);
  const onSubmit = handleSubmit(async (data: Partial<T>) => {
    updateOne({ data, id });
    showDialog?.({ content: "Item updated !" });
  });

  const { data } = useGetOne<T>("service", { id });

  return { register, data, onSubmit };
};
