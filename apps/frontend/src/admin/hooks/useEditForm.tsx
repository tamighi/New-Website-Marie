import { useDialog, useForm } from "lib";
import { useGetOne, useUpdateOne } from "./useData";

export const useEditForm = <T extends object>(
  ressource: string,
  id: string
) => {
  const { register, handleSubmit } = useForm<T>();
  const { showDialog } = useDialog();

  const updateOne = useUpdateOne(ressource, parseInt(id));
  const onSubmit = handleSubmit(async (submitData: Partial<T>) => {
    updateOne(submitData);
    showDialog?.({ content: "Item updated !" });
  });

  const { data } = useGetOne("service", parseInt(id));

  return { register, data, onSubmit };
};
