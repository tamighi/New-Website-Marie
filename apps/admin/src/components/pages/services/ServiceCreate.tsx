import { useCreateForm } from "hooks/useCreateForm";
import { Card, Input, TextArea } from "lib";

import { CreateServiceDto } from "./service";

export const ServiceCreate = () => {
  const { register, onSubmit, errors, isLoading } =
    useCreateForm<CreateServiceDto>("service");

  return (
    <Card style={{ width: "100%", margin: "12px" }}>
      <h3>Creer un service</h3>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          alignItems: "flex-start",
          margin: "8px",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <span>Nom du service</span>
        <Input {...register("name")} placeholder="nom" autoFocus />
        <span>Description du service</span>
        <TextArea
          {...register("description")}
          placeholder="Description"
          rows={10}
          cols={40}
        />
        <input type="submit" />
        {isLoading && "Loading ..."}
        {errors?.badEntry && "Bad entry"}
      </form>
    </Card>
  );
};
