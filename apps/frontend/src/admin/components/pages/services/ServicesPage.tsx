import React from "react";

import { Column } from "react-table";
import { useNavigate } from "react-router-dom";
import { Card, DataGrid } from "lib";

import { BasePage } from "../BasePage";
import { useData } from "admin/hooks/useData";

import { ServiceDto } from "./Services";
import { dataProvider } from "admin/api/dataProvider";

import styles from "./Datagrid.css";

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
      <Card
        className={`${styles.SelectedCard} ${
          selected.length !== 0 ? styles.Open : styles.Close
        }`}
      >
        {selected.length} {selected.length > 1 ? "items" : "item"} selected
        <button style={{ alignSelf: "flex-end" }} onClick={onDeleteClick}>
          x
        </button>
      </Card>
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
