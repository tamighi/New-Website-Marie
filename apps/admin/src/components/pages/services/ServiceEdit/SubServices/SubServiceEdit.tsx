import { useCreateForm } from "hooks/useCreateForm";
import { Button, Input } from "lib";
import { SubServiceDto } from "../../service";
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

  return (
    <>
      <span>Sous-services</span>
      {subServices.map((subService) => (
        <SubServiceEditForm key={subService.id} subService={subService} />
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
