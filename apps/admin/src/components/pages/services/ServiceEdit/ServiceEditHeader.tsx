import { useDeleteOne } from "hooks";
import { CloseIcon, DeleteIcon, IconButton } from "lib";
import { useNavigate } from "react-router-dom";

import { Header } from "../../core";
import { ServiceDto } from "../service";

export const ServiceEditHeader = ({
  serviceDto,
}: {
  serviceDto: ServiceDto;
}) => {
  const navigate = useNavigate();

  const { mutate } = useDeleteOne("service");

  return (
    <Header>
      <IconButton onClick={() => navigate(-1)}>
        <CloseIcon />
      </IconButton>
      <h3>Update service {serviceDto.name}</h3>
      <div style={{ flexGrow: 1 }} />
      <IconButton type="button" onClick={() => mutate({ id: serviceDto.id })}>
        <DeleteIcon style={{ color: "red" }} />
      </IconButton>
    </Header>
  );
};
