import { useEditForm } from "hooks/useEditForm";
import { Button, DeleteIcon, IconButton, Input } from "lib";
import { SubServiceDto } from "./service";

export const SubServiceForm = ({
  subService,
}: {
  subService: SubServiceDto;
}) => {
  const { register, onSubmit, isMutateLoading, error, onDelete } = useEditForm<
    Partial<SubServiceDto>
  >("subService", subService.id);

  return (
    <div style={{ display: "flex" }}>
      <Input
        {...register("textType")}
        defaultValue={subService.textType}
        placeholder="Type de texte"
      />
      <Input
        {...register("pricePerCharacter")}
        defaultValue={subService.pricePerCharacter}
        placeholder="Prix par caractere"
      />
      {isMutateLoading && <span>Loading ...</span>}
      <Button type="submit" onClick={onSubmit}>
        Update
      </Button>
      <IconButton type="button" onClick={onDelete}>
        <DeleteIcon style={{ color: "red" }} />
      </IconButton>
    </div>
  );
};
