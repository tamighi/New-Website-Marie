import { ServiceDto } from "types";
import { ApiErrorForm } from "components/errors/ApiErrorForm";
import { useEditForm } from "hooks";
import { Button, Input, TextArea } from "lib";

import { FormAction, FormContent } from "../../core";

export const ServiceEditForm = ({ data }: { data: ServiceDto }) => {
  const { register, onSubmit, error } = useEditForm<Partial<ServiceDto>>(
    "service",
    data.id
  );

  return (
    <form key={data.id}>
      <FormContent direction="vertical">
        <span>Nom du service</span>
        <Input
          {...register("name")}
          defaultValue={data.name}
          placeholder="name"
          flex
        />
        <span>Description du service</span>
        <TextArea
          {...register("description")}
          defaultValue={data.description}
          placeholder="description"
          rows={10}
          flex
        />
        {error?.badEntry && <ApiErrorForm />}
      </FormContent>
      <FormAction>
        <Button type="submit" onClick={onSubmit}>
          Update
        </Button>
      </FormAction>
    </form>
  );
};
