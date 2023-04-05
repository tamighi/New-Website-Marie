import { Header, MainCard } from "components/pages/core";
import { ReviewList } from "./ReviewList";

export const ReviewCard = ({ openDrawer }: { openDrawer: boolean }) => {
  return (
    <MainCard
      style={{
        marginRight: openDrawer ? "412px" : "12px",
        transition: "margin-right 225ms",
      }}
    >
      <Header>
        <h3>Avis</h3>
      </Header>
      <ReviewList />
    </MainCard>
  );
};
