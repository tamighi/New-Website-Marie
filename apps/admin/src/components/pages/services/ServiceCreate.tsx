import { useCreateForm } from "hooks/useCreateForm";
import { Button, Input, TextArea } from "lib";
import { FormAction, FormContent, Header, MainCard } from "../core";

import { ServiceDto } from "./service";

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
          <Input {...register("name")} placeholder="nom" autoFocus />
          <span>Description du service</span>
          <TextArea
            {...register("description")}
            placeholder="Description"
            rows={10}
            cols={40}
          />
        </FormContent>
        <FormAction>
        <Button type="submit" onClick={onSubmit}>
          Create
        </Button>
          {isLoading && "Loading ..."}
          {error?.badEntry && "Bad entry"}
        </FormAction>
      </form>
    </MainCard>
  );
};
