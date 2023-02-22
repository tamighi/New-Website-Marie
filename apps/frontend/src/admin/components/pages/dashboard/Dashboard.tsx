import { Card, ResponsiveGrid } from "lib";
import { BasePage } from "../BasePage";

export const Dashboard = () => {
  return (
    <BasePage>
      <Card style={{ width: "100%" }}>
        <ResponsiveGrid container>
          <ResponsiveGrid small={12}>
            <h2>Dashboard</h2>
          </ResponsiveGrid>
        </ResponsiveGrid>
      </Card>
    </BasePage>
  );
};
