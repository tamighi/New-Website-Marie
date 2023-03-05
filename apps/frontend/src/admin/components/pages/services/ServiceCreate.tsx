import { TextArea, TextInput } from "admin/components/inputs";
import { BasePage } from "../core";

import { CreateForm } from "../core/CreateForm/CreateForm";
import { CreateServiceDto } from "./service";

export const ServiceCreate = () => {
  return (
    <BasePage>
      <h3>Creer un service</h3>
      <CreateForm<CreateServiceDto> ressource="service">
        <TextInput name="name" placeholder="Nom" autoFocus />
        <TextArea
          name="description"
          placeholder="Description"
          rows={10}
          cols={40}
        />
      </CreateForm>
    </BasePage>
  );
};
