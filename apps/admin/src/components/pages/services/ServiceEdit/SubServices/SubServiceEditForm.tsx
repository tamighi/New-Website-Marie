import { useDeleteOne } from "hooks/useData";
import { useEditForm } from "hooks/useEditForm";
import { Button, DeleteIcon, IconButton, Input } from "lib";
import { SubServiceDto } from "../../service";

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
      <Button type="submit" onClick={onSubmit}>
        Update
      </Button>
      <IconButton type="button" onClick={() => mutate({ id: subService.id })}>
        <DeleteIcon style={{ color: "red" }} />
      </IconButton>
    </div>
  );
};
