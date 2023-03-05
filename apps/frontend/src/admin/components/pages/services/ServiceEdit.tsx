import { TextArea, TextInput } from "admin/components/inputs";

import { useGetOne, useUpdateOne } from "admin/hooks/useData";
import { useDialog, useForm } from "lib";
import { useParams } from "react-router-dom";

import { CreateServiceDto, isService } from ".";
import { BasePage } from "../core";

export const ServiceEdit = () => {
  const { register, handleSubmit } = useForm<CreateServiceDto>();
  const { showDialog } = useDialog();

  const { id } = useParams<"id">() as { id: string };
  const updateOne = useUpdateOne("service", parseInt(id));
  const onSubmit = async (submitData: CreateServiceDto) => {
    updateOne(submitData);
    showDialog?.({ content: "Item updated !" });
  };

  const { data } = useGetOne("service", parseInt(id));
  if (!data || !isService(data.data)) {
    return null;
  }
  return (
    <BasePage>
      <h3>Update service {data.data.name}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          {...register("name")}
          defaultValue={data.data.name}
          placeholder="name"
          autoFocus
        />
        <TextArea
          {...register("description")}
          defaultValue={data.data.description}
          placeholder="description"
        />
        <input type="submit" />
      </form>
    </BasePage>
  );
};
