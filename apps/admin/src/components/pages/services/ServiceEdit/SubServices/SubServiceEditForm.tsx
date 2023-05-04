import { SubServiceDto } from "types";
import { ApiErrorForm } from "components/errors/ApiErrorForm";
import { FormAction, FormContent, LoadingIcon } from "components/pages/core";
import { useDeleteOneRef, useEditRefForm } from "hooks";
import { Button, CloseIcon, IconButton, Input } from "lib";
import { SubServiceFormContainer } from "./SubServiceFormContainer";

export const SubServiceEditForm = ({
  subService,
}: {
  subService: SubServiceDto;
}) => {
  const { register, onSubmit, isLoading, error } = useEditRefForm<
    Partial<SubServiceDto>
  >("subService", subService.id, { parentResource: "service" });

  const { mutate } = useDeleteOneRef("subService", {
    parentResource: "service",
  });

  return (
    <form>
      <SubServiceFormContainer>
        <FormContent direction="horizontal">
          <Input
            {...register("textType")}
            defaultValue={subService.textType}
            placeholder="Type de texte"
            flex
          />
          <Input
            {...register("pricePerCharacter")}
            defaultValue={subService.pricePerCharacter}
            placeholder="Prix par caractere"
            flex
          />
        </FormContent>
        <FormAction>
          {error?.badEntry && <ApiErrorForm />}
          <Button type="submit" onClick={onSubmit}>
            Update
          </Button>
          <LoadingIcon isLoading={isLoading} />
        </FormAction>
        <IconButton
          type="button"
          onClick={() => mutate({ id: subService.id })}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translate(40%, -40%)",
          }}
        >
          <CloseIcon />
        </IconButton>
      </SubServiceFormContainer>
    </form>
  );
};
