import { TextArea, TextInput } from "admin/components/inputs";

import { useEditForm } from "admin/hooks/useEditForm";
import { useParams } from "react-router-dom";

import { CreateServiceDto, isService } from ".";

export const ServiceEdit = () => {
  const { id } = useParams<"id">() as { id: string };
  const { register, data, onSubmit } = useEditForm<CreateServiceDto>(
    "service",
    id
  );
  if (!data || !isService(data.data)) {
    return null;
  }
  return (
    <>
      <h3>Update service {data.data.name}</h3>
      <form onSubmit={onSubmit}>
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
    </>
  );
};
