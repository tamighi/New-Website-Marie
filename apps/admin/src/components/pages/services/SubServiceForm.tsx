import { SubServiceDto } from "./service";

export const SubServiceForm = ({
  subService,
}: {
  subService: SubServiceDto;
}) => {
  return <span>{subService.textType}</span>;
};
