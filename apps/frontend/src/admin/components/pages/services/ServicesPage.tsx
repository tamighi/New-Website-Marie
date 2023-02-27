import React from "react";

import { Column } from "react-table";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "lib";

import { BasePage } from "../BasePage";
import { useData } from "admin/hooks/useData";

import { ServiceDto } from "./Services";
import { dataProvider } from "admin/api/dataProvider";

const columns: Column<ServiceDto>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
];

export const ServicesPage = () => {
  const { data } = useData<ServiceDto>("service");
  const navigate = useNavigate();

  const [selected, setSelected] = React.useState<string[]>([]);

  const onDeleteClick = async () => {
    dataProvider.deleteMany("service", {
      ids: selected,
    });
  };

  return (
    <BasePage>
      {selected.length !== 0 && (
        <button style={{ alignSelf: "flex-end" }} onClick={onDeleteClick}>
          x
        </button>
      )}
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
