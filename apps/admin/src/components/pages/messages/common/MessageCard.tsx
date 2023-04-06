import { MainCard } from "components/pages/core";

export const MessageCard = ({
  openDrawer,
  children,
}: {
  openDrawer: boolean;
  children: React.ReactNode;
}) => {
  return (
    <MainCard
      style={{
        marginRight: openDrawer ? "412px" : "12px",
        transition: "margin-right 225ms",
      }}
    >
      {children}
    </MainCard>
  );
};
