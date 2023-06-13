import { Header, MainCard } from "components";
import { PendingQuestions } from "./PendingMessages";

const Dashboard = () => {
  return (
    <MainCard>
      <Header>
        <h2>Dashboard</h2>
      </Header>
      <PendingQuestions />
    </MainCard>
  );
};

export default Dashboard;
