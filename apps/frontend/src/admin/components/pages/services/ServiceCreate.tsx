import { useDialog, useForm } from "lib";

import { TextArea } from "admin/components/inputs/TextAreaInput";
import { TextInput } from "admin/components/inputs/TextInput";
import { BasePage } from "../core";

import { CreateServiceDto } from ".";
import { useCreate } from "admin/hooks/useData";

export const ServiceCreate = () => {
  const { register, handleSubmit, reset } = useForm<CreateServiceDto>();

  const create = useCreate<CreateServiceDto>("service");
  const { showDialog } = useDialog();

  const onSubmit = async (data: CreateServiceDto) => {
    await create(data);
    showDialog?.({ content: "Item created !" });
    reset();
  };

  return (
    <BasePage>
      <h3>Creer un service</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput {...register("name")} placeholder="Nom" autoFocus />
        <TextArea
          {...register("description")}
          placeholder="Description"
          rows={10}
          cols={40}
        />
        <input type="submit" />
      </form>
    </BasePage>
  );
};
