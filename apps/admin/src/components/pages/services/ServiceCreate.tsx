import { TextArea, TextInput } from "components/inputs";
import { useCreateForm } from "hooks/useCreateForm";
import { Card } from "lib";
import { FormContent } from "../core";

import { CreateServiceDto } from "./service";

export const ServiceCreate = () => {
  const { register, onSubmit, errors, isLoading } =
    useCreateForm<CreateServiceDto>("service");

  return (
    <Card>
      <h3>Creer un service</h3>
      <FormContent onSubmit={onSubmit}>
        <span>Nom du service</span>
        <TextInput {...register("name")} placeholder="nom" autoFocus />
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
    </Card>
  );
};
