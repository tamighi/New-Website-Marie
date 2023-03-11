import { useEditForm } from "hooks/useEditForm";
import {
  Button,
  CloseIcon,
  DeleteIcon,
  IconButton,
  Input,
  TextArea,
} from "lib";
import { useNavigate } from "react-router-dom";

import { CreateServiceDto, isService } from ".";
import { FormAction, FormContent, Header } from "../core";

export const ServiceEdit = ({ id }: { id: string }) => {
  const {
    register,
    data,
    onSubmit,
    isFetchLoading,
    isUpdateLoading,
    error,
    onDelete,
  } = useEditForm<CreateServiceDto>("service", id);
  const navigate = useNavigate();

  if (isFetchLoading) {
    return <div>Fetching ...</div>;
  }

  if (!data || !isService(data.data) || error?.unknownError) {
    return <div>Unkown Error</div>;
  }
  return (
    <>
      <Header style={{ justifyContent: "space-between" }}>
        <IconButton onClick={() => navigate("")}>
          <CloseIcon />
        </IconButton>
        <span>Update service {data.data.name}</span>
      </Header>
      <FormContent onSubmit={onSubmit} key={data.data.id}>
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
        {error?.badEntry && "Bad entries ..."}
        <FormAction>
          <Button type="submit">Update</Button>
          {isUpdateLoading && <span>Loading ...</span>}
          <IconButton type="button" onClick={() => {}}>
            <DeleteIcon />
          </IconButton>
        </FormAction>
      </FormContent>
    </>
  );
};
