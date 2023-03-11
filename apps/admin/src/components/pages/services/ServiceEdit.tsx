import { useGetOne } from "hooks/useData";
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

import { isService, ServiceDto } from ".";
import { FormAction, FormContent, Header } from "../core";
import { SubServiceEdit } from "./SubServiceEdit";

export const ServiceEdit = ({ id }: { id: string }) => {
  const { register, onSubmit, isMutateLoading, error, onDelete, setError } =
    useEditForm<Partial<ServiceDto>>("service", id);

  const { data, isLoading: isFetchLoading } = useGetOne(
    "service",
    { id },
    { onError: () => setError("unknownError") }
  );

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
      <FormContent key={data.data.id}>
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
        <SubServiceEdit subServices={data.data.subServices} />
        {error?.badEntry && "Bad entries ..."}
        <FormAction>
          <Button type="submit" onClick={onSubmit}>
            Update
          </Button>
          {isMutateLoading && <span>Loading ...</span>}
          <IconButton type="button" onClick={onDelete}>
            <DeleteIcon style={{ color: "red" }} />
          </IconButton>
        </FormAction>
      </FormContent>
    </>
  );
};
