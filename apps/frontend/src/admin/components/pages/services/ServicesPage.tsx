import React from "react";

import { Column } from "react-table";
import { useNavigate } from "react-router-dom";
import { Card, DataGrid, DeleteIcon, IconButton, Navbar, useModal } from "lib";

import { BasePage } from "../BasePage";
import { useGetData } from "admin/hooks/useData";

import { ServiceDto } from "./Services";
import { dataProvider } from "admin/api/dataProvider";

import styles from "./Datagrid.css";
import { useQueryClient } from "react-query";

const columns: Column<ServiceDto>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
];

export const ServicesPage = () => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data } = useGetData<ServiceDto>("service");
  const _data = React.useMemo(() => (data ? data : { data: [] }), [data]);


  const { showModal } = useModal();
  const onDeleteClick = async () => {
    if (!showModal) {
      return;
    }
    showModal({
      content: "Delete ?",
      okCallback: async () => {
        await dataProvider.deleteMany("service", {
          ids: selected,
        });
        queryClient.invalidateQueries("service");
      },
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
        data={_data?.data}
        columns={columns}
        selection
        setSelected={setSelected}
      />
    </BasePage>
  );
};
