import { useDialog, useForm } from "lib";

import { TextArea } from "admin/components/inputs/TextAreaInput";
import { TextInput } from "admin/components/inputs/TextInput";
import { BasePage } from "../BasePage";

import { dataProvider } from "admin/api/dataProvider";
import { CreateServiceDto } from "./Services";
import { useQueryClient } from "react-query";

export const ServiceCreate = () => {
  const { register, handleSubmit, reset } = useForm<CreateServiceDto>();
  const { showDialog } = useDialog();
  const queryClient = useQueryClient();

  const onSubmit = async (data: Partial<CreateServiceDto>) => {
    await dataProvider.create("service", { data });
    showDialog?.({ content: "Item created !" });
    queryClient.invalidateQueries("service");
    reset()
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
