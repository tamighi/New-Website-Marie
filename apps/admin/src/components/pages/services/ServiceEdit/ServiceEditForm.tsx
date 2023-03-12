import { useEditForm } from "hooks/useEditForm";
import { Button, Input, TextArea } from "lib";

import { ServiceDto } from "..";
import { FormAction, Form, FormContent } from "../../core";

export const ServiceEditForm = ({ data }: { data: ServiceDto }) => {
  const { register, onSubmit, error } = useEditForm<Partial<ServiceDto>>(
    "service",
    data.id
  );

  return (
    <Form key={data.id}>
      <FormContent direction="vertical">
        <span>Nom du service</span>
        <Input
          {...register("name")}
          defaultValue={data.name}
          placeholder="name"
          style={{ width: "100%", boxSizing: "border-box" }}
        />
        <span>Description du service</span>
        <TextArea
          {...register("description")}
          defaultValue={data.description}
          placeholder="description"
          rows={10}
          style={{ width: "100%", boxSizing: "border-box" }}
        />
        {error?.badEntry && "Bad entries ..."}
      </FormContent>
      <FormAction>
        <Button type="submit" onClick={onSubmit}>
          Update
        </Button>
      </FormAction>
    </Form>
  );
};
