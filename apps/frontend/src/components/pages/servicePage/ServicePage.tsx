import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { useServices } from "hooks/useServices";
import { Card, Paper } from "lib";

export const ServicePage = () => {
  const services = useServices();

  return (
    <CenteredPage>
      <Paper>
        <h2>Les services proposés ...</h2>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        {services?.map((service) => (
          <Card key={service.id} style={{ margin: "3px" }}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </Card>
        ))}
      </Paper>
    </CenteredPage>
  );
};
