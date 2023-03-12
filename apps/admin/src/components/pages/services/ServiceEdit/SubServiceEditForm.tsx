import { useEditForm } from "hooks/useEditForm";
import { Button, Input } from "lib";
import { SubServiceDto } from "../service";

export const SubServiceEditForm = ({
  subService,
}: {
  subService: SubServiceDto;
}) => {
  const { register, onSubmit } = useEditForm<Partial<SubServiceDto>>(
    "subService",
    subService.id
  );

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
    </div>
  );
};
