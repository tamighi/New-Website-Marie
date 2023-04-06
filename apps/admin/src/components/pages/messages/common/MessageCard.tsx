import { MainCard } from "components/pages/core";
import { useIsSmall } from "hooks";

export const MessageCard = ({
  openDrawer,
  children,
}: {
  openDrawer: boolean;
  children: React.ReactNode;
}) => {
  const isSmall = useIsSmall();
  return (
    <MainCard
      style={{
        marginRight: isSmall ? "0px" : openDrawer ? "412px" : "12px",
        marginLeft: isSmall ? "0px" : "12px",
        transition: "margin-right 225ms",
      }}
    >
      {children}
    </MainCard>
  );
};
