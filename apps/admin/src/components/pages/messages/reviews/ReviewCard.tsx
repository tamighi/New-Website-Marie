import { Header } from "components/pages/core";
import { MessageCard } from "../common/MessageCard";
import { ReviewList } from "./ReviewList";

export const ReviewCard = ({ openDrawer }: { openDrawer: boolean }) => {
  return (
    <MessageCard openDrawer={openDrawer}>
      <Header>
        <h3>Avis</h3>
      </Header>
      <ReviewList />
    </MessageCard>
  );
};
