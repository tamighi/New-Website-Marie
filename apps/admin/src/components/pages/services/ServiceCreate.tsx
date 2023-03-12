import { useCreateForm } from "hooks/useCreateForm";
import { Input, TextArea } from "lib";
import { Form, Header, MainCard } from "../core";

import { ServiceDto } from "./service";

export const ServiceCreate = () => {
  const { register, onSubmit, error, isLoading } =
    useCreateForm<Partial<ServiceDto>>("service");

  return (
    <MainCard>
      <Header>
        <h3>Creer un service</h3>
      </Header>
      <Form onSubmit={onSubmit}>
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
        {error?.badEntry && "Bad entry"}
      </Form>
    </MainCard>
  );
};
