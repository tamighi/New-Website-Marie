import { useCreateForm } from "hooks/useCreateForm";
import { Input, TextArea } from "lib";
import { FormContent, Header, MainCard } from "../core";

import { CreateSubServiceDto } from "./subService";

export const SubServiceCreate = () => {
  const { register, onSubmit, errors, isLoading } =
    useCreateForm<CreateSubServiceDto>("subService");

  return (
    <MainCard>
      <Header>
        <h3>Creer un sous-service</h3>
      </Header>
      <FormContent onSubmit={onSubmit}>
        <span>Nom du sous-service</span>
        <Input {...register("name")} placeholder="nom" autoFocus />
        <span>Description du sous-service</span>
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
