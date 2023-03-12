import { FormAction, FormContent } from "components/pages/core";
import { useCreateForm } from "hooks/useCreateForm";
import { Button, Input } from "lib";
import { SubServiceDto } from "../../service";

export const SubServiceCreate = ({ serviceId }: { serviceId: number }) => {
  const { register, onSubmit, error, isLoading } = useCreateForm<
    Partial<SubServiceDto>
  >("subService", { defaultData: { service: { id: serviceId } } });

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <FormContent direction="horizontal">
        <Input {...register("textType")} placeholder="Type de texte" />
        <Input
          {...register("pricePerCharacter")}
          placeholder="Prix par caractere"
        />
        {isLoading && "Loading ..."}
        {error?.badEntry && "Bad entry"}
      </FormContent>
      <FormAction>
        <Button onClick={onSubmit}>Create</Button>
      </FormAction>
    </div>
  );
};
