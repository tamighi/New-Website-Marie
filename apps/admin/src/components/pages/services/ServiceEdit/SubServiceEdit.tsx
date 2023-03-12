import { useCreateForm } from "hooks/useCreateForm";
import { useDeleteOne } from "hooks/useData";
import { Button, DeleteIcon, IconButton, Input } from "lib";
import { SubServiceDto } from "../service";
import { SubServiceEditForm } from "./SubServiceEditForm";

export const SubServiceEdit = ({
  subServices = [],
  serviceId,
}: {
  subServices?: SubServiceDto[];
  serviceId: number;
}) => {
  const { register, onSubmit, error, isLoading } = useCreateForm<
    Partial<SubServiceDto>
  >("subService", { defaultData: { service: { id: serviceId } } });

  const { mutate, isError } = useDeleteOne("subService");

  if (isError) {
    return <div>Unknown error...</div>;
  }

  return (
    <>
      <span>Sous-services</span>
      {subServices.map((subService) => (
        <>
          <SubServiceEditForm key={subService.id} subService={subService} />
          <IconButton
            type="button"
            onClick={() => mutate({ id: subService.id })}
          >
            <DeleteIcon style={{ color: "red" }} />
          </IconButton>
        </>
      ))}
      <div style={{ display: "flex" }}>
        <Input {...register("textType")} placeholder="Type de texte" />
        <Input
          {...register("pricePerCharacter")}
          placeholder="Prix par caractere"
        />
        {isLoading && "Loading ..."}
        {error?.badEntry && "Bad entry"}
        <Button onClick={onSubmit}>Create</Button>
      </div>
    </>
  );
};
