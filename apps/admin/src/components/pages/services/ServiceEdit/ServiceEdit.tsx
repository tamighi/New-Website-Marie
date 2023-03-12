import { useDeleteOne, useGetOne } from "hooks/useData";
import { CloseIcon, DeleteIcon, IconButton, useDialog } from "lib";
import { useNavigate, useParams } from "react-router-dom";

import { isService } from "..";
import { FormContent, Header, MainCard } from "../../core";
import { ServiceEditForm } from "./ServiceEditForm";
import { SubServiceEdit } from "./SubServiceEdit";

export const ServiceEdit = () => {
  const { id = "1" } = useParams();
  const { showDialog } = useDialog();
  const navigate = useNavigate();

  const { mutate, isError } = useDeleteOne("service", {
    onSuccess: () => {
      showDialog?.({ content: "Item deleted !" });
      navigate(-1);
    },
  });

  const { data, isLoading } = useGetOne("service", { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || isError || !isService(data.data)) {
    return <div>Unkown error...</div>;
  }

  return (
    <MainCard>
      <Header>
        <IconButton onClick={() => navigate(-1)}>
          <CloseIcon />
        </IconButton>
        <h3>Update service {data.data.name}</h3>
        <div style={{ flexGrow: 1 }} />
        <IconButton type="button" onClick={() => mutate({ id })}>
          <DeleteIcon style={{ color: "red" }} />
        </IconButton>
      </Header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <MainCard>
          <ServiceEditForm data={data.data} />
        </MainCard>
        <MainCard>
          <FormContent>
            <SubServiceEdit
              serviceId={data.data.id}
              subServices={data.data.subServices}
            />
          </FormContent>
        </MainCard>
      </div>
    </MainCard>
  );
};
