import { Header, MainCard } from "components";
import { PendingMessages } from "./PendingMessages";

const Dashboard = () => {
  return (
    <MainCard>
      <Header>
        <h2>Dashboard</h2>
      </Header>
      <PendingMessages />
    </MainCard>
  );
};

export default Dashboard;
