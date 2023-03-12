import { ServiceList } from ".";
import { CreateButton, Header, MainCard } from "../core";

export const ServicePage = () => {
  return (
    <MainCard>
      <Header>
        <h3>Tous les services</h3>
        <div style={{ flexGrow: 1 }} />
        <CreateButton />
      </Header>
      <ServiceList />
    </MainCard>
  );
};
