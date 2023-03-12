import { ResponsiveGrid } from "lib";
import { Header, SecondaryCard } from "../core";

export const Dashboard = () => {
  return (
    <SecondaryCard>
      <Header>
        <h2>Dashboard</h2>
      </Header>
      <ResponsiveGrid container>
        <ResponsiveGrid small={12}></ResponsiveGrid>
      </ResponsiveGrid>
    </SecondaryCard>
  );
};
