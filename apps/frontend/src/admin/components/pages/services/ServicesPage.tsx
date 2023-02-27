import React from "react";

import { Column } from "react-table";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "lib";

import { BasePage } from "../BasePage";
import { useData } from "admin/hooks/useData";

import { ServiceDto } from "./Services";

const columns: Column<ServiceDto>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
];

export const ServicesPage = () => {
  const { data } = useData<ServiceDto>("service");
  const navigate = useNavigate();

  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <BasePage>
      <button
        style={{ alignSelf: "flex-end" }}
        onClick={() => navigate("create")}
      >
        +
      </button>
      {data?.data && (
        <DataGrid
          data={data?.data}
          columns={columns}
          selection
          setSelected={setSelected}
        />
      )}
    </BasePage>
  );
};
