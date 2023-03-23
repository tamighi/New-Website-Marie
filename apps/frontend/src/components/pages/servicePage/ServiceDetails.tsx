import { useService } from "hooks/useService";
import { Card } from "lib";

export const ServiceDetails = ({ id }: { id: string }) => {
  const { data: service } = useService(id);

  if (!service) {
    return null;
  }
  return (
    <Card style={{ height: "100%", width: "100%", boxSizing: "border-box" }}>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </Card>
  );
};
