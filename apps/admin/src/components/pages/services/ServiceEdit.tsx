import { useGetOne } from "hooks/useData";
import { useEditForm } from "hooks/useEditForm";
import {
  Button,
  CloseIcon,
  DeleteIcon,
  Divider,
  IconButton,
  Input,
  TextArea,
} from "lib";
import { useNavigate, useParams } from "react-router-dom";

import { isService, ServiceDto } from ".";
import { FormAction, FormContent, Header, MainCard } from "../core";
import { SubServiceEdit } from "./SubServiceEdit";

export const ServiceEdit = () => {
  const { id = "1" } = useParams();

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
    <MainCard>
      <Header>
        <IconButton onClick={() => navigate(-1)}>
          <CloseIcon />
        </IconButton>
        <h3>Update service {data.data.name}</h3>
      </Header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <MainCard>
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
        </MainCard>
        <MainCard>
          <FormContent>
            <SubServiceEdit
              serviceId={data.data.id}
              subServices={data.data.subServices}
            />
          </FormContent>
        </MainCard>
      </div>
    </MainCard>
  );
};
