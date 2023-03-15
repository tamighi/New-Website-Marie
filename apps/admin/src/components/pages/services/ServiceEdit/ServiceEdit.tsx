import { useParams } from "react-router-dom";

import { MainCard, SecondaryCard } from "../../core";
import { isService } from "..";
import { ServiceEditForm } from "./ServiceEditForm";
import { ServiceEditHeader } from "./ServiceEditHeader";
import { SubServiceEdit } from "./SubServices";

import { useGetOne } from "hooks";

export const ServiceEdit = () => {
  const { id = "1" } = useParams();

  const { data, isLoading } = useGetOne("service", { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !isService(data.data)) {
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
        <SecondaryCard>
          <ServiceEditForm data={data.data} />
        </SecondaryCard>
        <SecondaryCard>
          <SubServiceEdit
            serviceId={data.data.id}
            subServices={data.data.subServices}
          />
        </SecondaryCard>
      </div>
    </MainCard>
  );
};
