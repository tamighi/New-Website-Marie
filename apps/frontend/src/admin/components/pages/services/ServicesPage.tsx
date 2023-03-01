import React from "react";

import { Column } from "react-table";
import { useNavigate } from "react-router-dom";
import { Card, DataGrid, DeleteIcon, IconButton, Navbar, useModal } from "lib";

import { BasePage } from "../BasePage";
import { useGetData } from "admin/hooks/useData";

import { ServiceDto } from "./Services";
import { dataProvider } from "admin/api/dataProvider";

import styles from "./Datagrid.css";

const columns: Column<ServiceDto>[] = [
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
];

export const ServicesPage = () => {

  const { data } = useGetData<ServiceDto>("service");
  const [selected, setSelected] = React.useState<string[]>([]);

  const navigate = useNavigate();
  const { showModal } = useModal();

  const onDeleteClick = async () => {
    if (!showModal) {
      return;
    }
    showModal({
      content: "Delete ?",
      okCallback: () =>
        dataProvider.deleteMany("service", {
          ids: selected,
        }),
    });
  };

  return (
    <BasePage>
      <Card
        className={`${styles.SelectedCard} ${
          selected.length !== 0 ? styles.Open : styles.Close
        }`}
      >
        <p style={{ paddingRight: "48px" }}>
          {selected.length} {selected.length > 1 ? "items" : "item"} selected
        </p>
        <IconButton onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </Card>
      <Navbar style={{ justifyContent: "flex-end" }}>
        <button onClick={() => navigate("create")}>+</button>
      </Navbar>
      <DataGrid
        data={data?.data || []}
        columns={columns}
        selection
        setSelected={setSelected}
      />
    </BasePage>
  );
};
