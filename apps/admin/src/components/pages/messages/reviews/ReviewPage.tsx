import { matchPath, useLocation } from "react-router-dom";
import { Header, MainCard } from "../../core";
import { ReviewDrawer } from "./ReviewDrawer";
import { ReviewList } from "./ReviewList";

export const ReviewPage = () => {
  const location = useLocation();

  const match = matchPath("/reviews/:id", location.pathname);

  return (
    <>
      <MainCard
        style={{
          marginRight: !!match ? "412px" : "12px",
          transition: "margin-right 225ms",
        }}
      >
        <Header>
          <h3>Demandes d'information</h3>
        </Header>
        <ReviewList />
      </MainCard>
      <ReviewDrawer />
    </>
  );
};
