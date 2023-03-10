import { useEditForm } from "hooks/useEditForm";
import { Card, Input, TextArea, Toolbar } from "lib";
import { useNavigate } from "react-router-dom";

import { CreateServiceDto, isService } from ".";
import { CloseButton } from "../core";

export const ServiceEdit = ({ id }: { id: string }) => {
  const { register, data, onSubmit, isFetchLoading, isUpdateLoading, error } =
    useEditForm<CreateServiceDto>("service", id);
  const navigate = useNavigate();

  if (isFetchLoading) {
    return <div>Fetching ...</div>;
  }

  if (!data || !isService(data.data) || error?.unknownError) {
    return <div>Unkown Error</div>;
  }
  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <CloseButton onClick={() => navigate("")} />
        <span>Update service {data.data.name}</span>
      </Toolbar>
      <form
        onSubmit={onSubmit}
        key={data.data.id}
        style={{
          display: "flex",
          alignItems: "flex-start",
          margin: "8px",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <span>Nom du service</span>
        <Input
          {...register("name")}
          defaultValue={data.data.name}
          placeholder="name"
        />
        <span>Description du service</span>
        <TextArea
          {...register("description")}
          defaultValue={data.data.description}
          placeholder="description"
          rows={10}
        />
        {isUpdateLoading && <span>Loading ...</span>}
        <input type="submit" />
        {error?.badEntry && "Bad entries ..."}
      </form>
    </Card>
  );
};
