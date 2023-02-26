import { TextArea } from "admin/components/inputs/TextAreaInput";
import { TextInput } from "admin/components/inputs/TextInput";
import { BasePage } from "../BasePage";

export const ServiceCreate = () => {
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event)
  };
  return (
    <BasePage>
      Creer un service
      <form onSubmit={onSubmit}>
        <TextInput placeholder="Nom" autoFocus />
        <TextArea placeholder="Description" rows={10} cols={40} />
        <input type="submit" />
      </form>
    </BasePage>
  );
};
