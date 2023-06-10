import { useParams } from "react-router-dom";

import { MainCard } from "components";
import { ServiceEditForm } from "./ServiceEditForm";
import { ServiceEditHeader } from "./ServiceEditHeader";
import { SubServiceEdit } from "./SubServices";

import { useGetOne } from "hooks";
import { Card } from "lib";

// TODO: Work on styles
export const ServiceEdit = () => {
  const { id = "1" } = useParams();

  const { data, isLoading } = useGetOne("service", { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Unkown error...</div>;
  }

  return (
    <MainCard>
      <ServiceEditHeader serviceDto={data.data} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Card
          style={{
            flex: 1,
            margin: "12px",
            padding: "12px",
            display: "grid",
            alignContent: "flex-start",
            gap: "12px",
            minWidth: "300px",
          }}
        >
          <ServiceEditForm data={data.data} />
        </Card>
        <Card
          style={{
            flex: 1,
            margin: "12px",
            padding: "12px",
            display: "grid",
            alignContent: "flex-start",
            gap: "12px",
            minWidth: "300px",
          }}
        >
          <SubServiceEdit
            serviceId={data.data.id}
            subServices={data.data.subServices}
          />
        </Card>
      </div>
    </MainCard>
  );
};
