import { SubServiceDto } from "./service";
import { SubServiceForm } from "./SubServiceForm";

export const SubServiceEdit = ({
  subServices = [],
}: {
  subServices?: SubServiceDto[];
}) => {
  return (
    <>
      {subServices.map((subService) => (
        <SubServiceForm key={subService.id} subService={subService} />
      ))}
    </>
  );
};
