import { MainCard } from "components/pages/core";
import React from "react";
import { matchPath, useLocation } from "react-router-dom";

type Props = {
  resource: string;
  children: React.ReactNode;
};

export const MessageCard = (props: Props) => {
  const { resource, children } = props;

  const location = useLocation();

  const match = matchPath(`/${resource}/:id`, location.pathname);

  return (
    <MainCard
      style={{
        marginRight: !!match ? "412px" : "12px",
        transition: "margin-right 225ms",
      }}
    >
      {children}
    </MainCard>
  );
};
