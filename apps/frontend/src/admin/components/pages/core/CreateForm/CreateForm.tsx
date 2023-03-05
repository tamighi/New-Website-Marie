import React from "react";
import { useCreate } from "admin/hooks/useData";
import { useDialog, useForm } from "lib";

interface CreateFormProps {
  children: React.ReactElement[];
  ressource: string;
}

export const CreateForm = <T extends object>({
  children,
  ressource,
}: CreateFormProps) => {
  const create = useCreate<T>(ressource);
  const { showDialog } = useDialog();
  const { register, handleSubmit, reset } = useForm<T>();

  const onSubmit = async (data: Partial<T>) => {
    await create(data as T);
    showDialog?.({ content: "Item created !" });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { ...register(child.props.name) })
      )}
      <input type="submit" />
    </form>
  );
};
