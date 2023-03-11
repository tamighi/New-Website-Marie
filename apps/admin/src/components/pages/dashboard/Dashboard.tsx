import { ResponsiveGrid } from "lib";
import { Header, MainCard } from "../core";

export const Dashboard = () => {
  return (
    <MainCard>
      <Header>
        <h2>Dashboard</h2>
      </Header>
      <ResponsiveGrid container>
        <ResponsiveGrid small={12}></ResponsiveGrid>
      </ResponsiveGrid>
    </MainCard>
  );
};
