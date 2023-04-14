import { SubServiceDto } from "api/types";
import { ApiErrorForm } from "components/errors/ApiErrorForm";
import { FormAction, FormContent, LoadingIcon } from "components/pages/core";
import { useCreateRefForm } from "hooks";
import { Button, Input } from "lib";
import { SubServiceFormContainer } from "./SubServiceFormContainer";

export const SubServiceCreate = ({ serviceId }: { serviceId: number }) => {
  const { register, onSubmit, error, isLoading } = useCreateRefForm<
    Partial<SubServiceDto>
  >("subService", {
    defaultData: { service: { id: serviceId } },
    parentResource: "service",
  });

  return (
    <form>
      <SubServiceFormContainer>
        <FormContent direction="horizontal">
          <Input {...register("textType")} placeholder="Type de texte" flex />
          <Input
            {...register("pricePerCharacter")}
            placeholder="Prix par caractere"
            flex
          />
        </FormContent>
        <FormAction>
          {error?.badEntry && <ApiErrorForm />}
          <Button onClick={onSubmit}>Create</Button>
          <LoadingIcon isLoading={isLoading} />
        </FormAction>
      </SubServiceFormContainer>
    </form>
  );
};
