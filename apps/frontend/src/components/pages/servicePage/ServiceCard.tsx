import { Card } from "lib";
import { useNavigate } from "react-router-dom";
import { ServiceDto } from "resources/service";

export const ServiceCard = ({ service }: { service: ServiceDto }) => {
  const navigate = useNavigate();

  return (
    <Card
      style={{ margin: "3px", width: "300px" }}
      onClick={() => navigate(`${service.id}`)}
    >
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </Card>
  );
};
