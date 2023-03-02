import { dataProvider } from "admin/api/dataProvider";
import { TextArea } from "admin/components/inputs/TextAreaInput";
import { TextInput } from "admin/components/inputs/TextInput";
import { useGetOne } from "admin/hooks/useData";
import { useDialog, useForm } from "lib";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { CreateServiceDto, ServiceDto } from "./services";

export const ServiceEdit = () => {
  const { register, handleSubmit } = useForm<CreateServiceDto>();
  const { showDialog } = useDialog();

  const queryClient = useQueryClient();

  const { id } = useParams<"id">() as { id: string };
  const { data } = useGetOne<ServiceDto>("service", id);

  const onSubmit = async (submitData: Partial<CreateServiceDto>) => {
    await dataProvider.update("service", { id: id, data: submitData });
    showDialog?.({ content: "Item updated !" });
    queryClient.invalidateQueries("service");
  };

  if (!data) {
    return null;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput {...register("name")} defaultValue={data.name} autoFocus />
      <TextArea {...register("description")} defaultValue={data.description} />
      <input type="submit" />
    </form>
  );
};
