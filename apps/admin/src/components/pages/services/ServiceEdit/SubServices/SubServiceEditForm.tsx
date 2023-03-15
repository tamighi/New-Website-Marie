import { FormAction, FormContent } from "components/pages/core";
import { useDeleteOne, useEditForm } from "hooks";
import { Button, DeleteIcon, IconButton, Input } from "lib";
import { SubServiceDto } from "../../service";
import { SubServiceFormContainer } from "./SubServiceFormContainer";

export const SubServiceEditForm = ({
  subService,
}: {
  subService: SubServiceDto;
}) => {
  const { register, onSubmit } = useEditForm<Partial<SubServiceDto>>(
    "subService",
    subService.id
  );

  const { mutate } = useDeleteOne("subService");

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
