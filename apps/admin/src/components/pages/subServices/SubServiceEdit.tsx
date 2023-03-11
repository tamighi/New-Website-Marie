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

import { CreateSubServiceDto, isSubService } from ".";
import { FormAction, FormContent, Header } from "../core";

export const SubServiceEdit = ({ id }: { id: string }) => {
  const {
    register,
    data,
    onSubmit,
    isFetchLoading,
    isMutateLoading,
    error,
    onDelete,
  } = useEditForm<CreateSubServiceDto>("subService", id);

  const navigate = useNavigate();

  if (isFetchLoading) {
    return <div>Fetching ...</div>;
  }

  if (!data || !isSubService(data.data) || error?.unknownError) {
    return <div>Unkown Error</div>;
  }
  return (
    <>
      <Header style={{ justifyContent: "space-between" }}>
        <IconButton onClick={() => navigate("")}>
          <CloseIcon />
        </IconButton>
        <span>Update sous-service {data.data.name}</span>
      </Header>
      <FormContent onSubmit={onSubmit} key={data.data.id}>
        <span>Nom du sous-service</span>
        <Input
          {...register("name")}
          defaultValue={data.data.name}
          placeholder="name"
        />
        <span>Description du sous-service</span>
        <TextArea
          {...register("description")}
          defaultValue={data.data.description}
          placeholder="description"
          rows={10}
        />
        {error?.badEntry && "Bad entries ..."}
        <FormAction>
          <Button type="submit">Update</Button>
          {isMutateLoading && <span>Loading ...</span>}
          <IconButton type="button" onClick={onDelete}>
            <DeleteIcon style={{ color: "red" }} />
          </IconButton>
        </FormAction>
      </FormContent>
    </>
  );
};
