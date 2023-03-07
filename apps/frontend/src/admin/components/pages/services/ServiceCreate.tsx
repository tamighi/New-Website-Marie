import { TextArea, TextInput } from "admin/components/inputs";
import { useCreateForm } from "admin/hooks/useCreateForm";
import { FormContent, MainContent } from "../core";

import { CreateServiceDto } from "./service";

export const ServiceCreate = () => {
  const { register, onSubmit } = useCreateForm<CreateServiceDto>("service");

  return (
    <MainContent>
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
      </FormContent>
    </MainContent>
  );
};
