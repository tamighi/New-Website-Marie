import { TextArea, TextInput } from "admin/components/inputs";

import { useEditForm } from "admin/hooks/useEditForm";
import { useNavigate } from "react-router-dom";

import { CreateServiceDto, isService } from ".";
import { FormContent, SideContent } from "../core";

export const ServiceEdit = ({ id }: { id: string }) => {
  const { register, data, onSubmit } = useEditForm<CreateServiceDto>(
    "service",
    id
  );
  const navigate = useNavigate();
  if (!data || !isService(data.data)) {
    return null;
  }
  return (
    <SideContent>
      <h3>Update service {data.data.name}</h3>
      <button onClick={() => navigate("/admin/services")}>Close</button>
      <FormContent onSubmit={onSubmit}>
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
      </FormContent>
    </SideContent>
  );
};
