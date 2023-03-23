import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { useServices } from "hooks/useServices";
import { Card } from "lib";

export const ServicePage = () => {
  const services = useServices();
  console.log(services)
  return (
    <CenteredPage>
      <Card>
        <h2>Les services proposés ...</h2>
      </Card>
    </CenteredPage>
  );
};
