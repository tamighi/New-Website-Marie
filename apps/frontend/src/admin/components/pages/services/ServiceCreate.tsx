import { TextArea } from "admin/components/inputs/TextAreaInput";
import { TextInput } from "admin/components/inputs/TextInput";
import { BasePage } from "../core";

import { CreateForm } from "../core/CreateForm/CreateForm";

export const ServiceCreate = () => {
  return (
    <BasePage>
      <h3>Creer un service</h3>
      <CreateForm ressource="service">
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
