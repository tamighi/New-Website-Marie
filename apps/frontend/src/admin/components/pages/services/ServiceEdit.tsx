import { TextArea, TextInput } from "admin/components/inputs";

import { useEditForm } from "admin/hooks/useEditForm";
import { Card } from "lib";
import { useNavigate } from "react-router-dom";

import { CreateServiceDto, isService } from ".";

export const ServiceEdit = ({ id }: { id: string }) => {
  const { register, data, onSubmit } = useEditForm<CreateServiceDto>(
    "service",
    id
  );
  const navigate = useNavigate()
  if (!data || !isService(data.data)) {
    return null;
  }
  return (
    <Card style={{ marginRight: "24px", flexGrow: 1 }}>
      <h3>Update service {data.data.name}</h3>
      <button onClick={() => navigate("/admin/services")}>Close</button>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
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
    </Card>
  );
};
