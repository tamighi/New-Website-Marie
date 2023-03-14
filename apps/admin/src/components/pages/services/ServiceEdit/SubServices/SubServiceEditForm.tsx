import { FormAction, FormContent } from "components/pages/core";
import { useDeleteOneRef } from "hooks/useData";
import { useEditForm } from "hooks/useEditForm";
import { Button, DeleteIcon, IconButton, Input } from "lib";
import { SubServiceDto } from "../../service";
import { SubServiceFormContainer } from "./SubServiceFormContainer";

export const SubServiceEditForm = ({
  subService,
  serviceId,
}: {
  subService: SubServiceDto;
  serviceId: number | string;
}) => {
  const { register, onSubmit } = useEditForm<Partial<SubServiceDto>>(
    "subService",
    subService.id
  );

  const { mutate } = useDeleteOneRef("subService", {
    refId: serviceId.toString(),
    refRessource: "service",
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
          <Button type="submit" onClick={onSubmit}>
            Update
          </Button>
          <IconButton
            type="button"
            onClick={() => mutate({ id: subService.id })}
          >
            <DeleteIcon style={{ color: "red" }} />
          </IconButton>
        </FormAction>
      </SubServiceFormContainer>
    </form>
  );
};
