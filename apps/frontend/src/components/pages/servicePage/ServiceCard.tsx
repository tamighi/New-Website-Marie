import { Card } from "lib";
import { ServiceDto } from "resources/service";

export const ServiceCard = ({ service }: { service: ServiceDto }) => {
  return (
    <Card style={{ margin: "3px" }}>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </Card>
  );
};
