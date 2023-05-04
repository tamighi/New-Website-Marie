import { ServiceDto } from "types";
import { ApiErrorForm } from "components/errors/ApiErrorForm";
import { useCreateForm } from "hooks";
import { Button, Input, TextArea } from "lib";
import { FormAction, FormContent, Header, MainCard } from "../core";

export const ServiceCreate = () => {
  const { register, onSubmit, error, isLoading } =
    useCreateForm<Partial<ServiceDto>>("service");

  return (
    <MainCard>
      <form onSubmit={onSubmit}>
        <FormContent direction="vertical">
          <Header>
            <h3>Creer un service</h3>
          </Header>
          <span>Nom du service</span>
          <Input flex {...register("name")} placeholder="nom" autoFocus />
          <span>Description du service</span>
          <TextArea
            {...register("description")}
            placeholder="Description"
            rows={10}
            flex
          />
        </FormContent>
        <FormAction>
          <Button type="submit" onClick={onSubmit}>
            Create
          </Button>
          {isLoading && "Loading ..."}
          {error?.badEntry && <ApiErrorForm />}
        </FormAction>
      </form>
    </MainCard>
  );
};
