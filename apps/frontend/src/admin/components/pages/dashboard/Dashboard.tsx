import { ResponsiveGrid } from "lib";
import { BasePage } from "../core";

export const Dashboard = () => {
  return (
    <BasePage>
      <ResponsiveGrid container>
        <ResponsiveGrid small={12}>
          <h2>Dashboard</h2>
        </ResponsiveGrid>
      </ResponsiveGrid>
    </BasePage>
  );
};
