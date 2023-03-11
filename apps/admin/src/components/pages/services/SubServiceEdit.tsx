import { SubServiceDto } from "./service";

export const SubServiceEdit = ({
  subServices = [],
}: {
  subServices?: SubServiceDto[];
}) => {
  return (
    <>
      {subServices.map((subService) => (
        <span key={subService.id}>{subService.textType}</span>
      ))}
    </>
  );
};
