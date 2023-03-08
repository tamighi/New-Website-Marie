import { TextArea, TextInput } from "admin/components/inputs";

import { useEditForm } from "admin/hooks/useEditForm";
import { Button } from "lib";
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
    return <div>Error</div>;
  }
  return (
    <SideContent>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={() => navigate("/admin/services")}>Close</Button>
        <h3>Update service {data.data.name}</h3>
      </div>
      <FormContent onSubmit={onSubmit}>
        <span>Nom du service</span>
        <TextInput
          {...register("name")}
          defaultValue={data.data.name}
          placeholder="name"
          autoFocus
          style={{ width: "initial" }}
        />
        <span>Description du service</span>
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
