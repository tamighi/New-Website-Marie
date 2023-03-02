import { useDialog, useForm } from "lib";

import { TextArea } from "admin/components/inputs/TextAreaInput";
import { TextInput } from "admin/components/inputs/TextInput";
import { BasePage } from "../BasePage";

import { dataProvider } from "admin/api/dataProvider";
import { CreateServiceDto } from "./Services";

export const ServiceCreate = () => {
  const { register, handleSubmit } = useForm<CreateServiceDto>();
  const { showDialog } = useDialog();

  const onSubmit = async (data: CreateServiceDto) => {
    dataProvider.create("service", { data });
    showDialog?.({ content: "Item created !" });
  };
  return (
    <BasePage>
      Creer un service
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
