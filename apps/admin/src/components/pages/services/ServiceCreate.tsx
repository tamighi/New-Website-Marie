import { useCreateForm } from "hooks/useCreateForm";
import { Input, TextArea } from "lib";
import { FormContent, Header, MainCard } from "../core";

import { ServiceDto } from "./service";

export const ServiceCreate = () => {
  const { register, onSubmit, errors, isLoading } =
    useCreateForm<ServiceDto>("service");

  return (
    <MainCard>
      <Header>
        <h3>Creer un service</h3>
      </Header>
      <FormContent onSubmit={onSubmit}>
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
        {errors?.badEntry && "Bad entry"}
      </FormContent>
    </MainCard>
  );
};
