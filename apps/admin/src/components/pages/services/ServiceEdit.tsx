import { TextArea, TextInput } from "components/inputs";

import { useEditForm } from "hooks/useEditForm";
import { Card, Toolbar } from "lib";
import { useNavigate } from "react-router-dom";

import { CreateServiceDto, isService } from ".";
import { CloseButton, FormContent } from "../core";

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
      <FormContent onSubmit={onSubmit} key={data.data.id}>
        <span>Nom du service</span>
        <TextInput
          {...register("name")}
          defaultValue={data.data.name}
          placeholder="name"
        />
        <span>Description du service</span>
        <TextArea
          {...register("description")}
          defaultValue={data.data.description}
          placeholder="description"
        />
        {isUpdateLoading && <span>Loading ...</span>}
        <input type="submit" />
        {error?.badEntry && "Bad entries ..."}
      </FormContent>
    </Card>
  );
};
