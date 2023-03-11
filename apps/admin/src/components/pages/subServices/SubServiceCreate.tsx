import { useCreateForm } from "hooks/useCreateForm";
import { Input } from "lib";
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
        <span>Type de texte</span>
        <Input {...register("textType")} placeholder="Memoire" autoFocus />
        <span>Prix par caractere</span>
        <Input {...register("pricePerCharacter")} placeholder="0.002" />
        <input type="submit" />
        {isLoading && "Loading ..."}
        {errors?.badEntry && "Bad entry"}
      </FormContent>
    </MainCard>
  );
};
