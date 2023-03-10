import { TextArea, TextInput } from "components/inputs";

import { useEditForm } from "hooks/useEditForm";
import { Toolbar } from "lib";
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
    <>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <CloseButton onClick={() => navigate("")} />
        <span>Update service {data.data.name}</span>
      </Toolbar>
      <FormContent onSubmit={onSubmit}>
        <span>Nom du service</span>
        <TextInput
          {...register("name")}
          key={data.data.id}
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
        {isUpdateLoading && <span>Loading ...</span>}
        <input type="submit" />
        {error?.badEntry && "Bad entries ..."}
      </FormContent>
    </>
  );
};
