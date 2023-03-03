import React from "react";
import { BasePage } from "..";
import {
  AddIcon,
  Card,
  DataGrid,
  DeleteIcon,
  IconButton,
  Navbar,
  useDialog,
} from "lib";

import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useGetData } from "admin/hooks/useData";
import { dataProvider } from "admin/api/dataProvider";

import { Column } from "react-table";

import styles from "./Datagrid.css";

export const DataGridLayout = <T extends { id: string | number }>({
  ressource,
  columns,
}: {
  ressource: string;
  columns: Column<T>[];
}) => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data } = useGetData(ressource);
  const _data = React.useMemo(() => data, [data]);

  const { showDialog } = useDialog();
  const onDeleteClick = async () => {
    await dataProvider.deleteMany("service", {
      ids: selected,
    });
    showDialog?.({ content: `${selected.length} item(s) deleted` });
    queryClient.invalidateQueries("service");
  };

  return (
    <BasePage>
      <Card
        className={`${styles.SelectedCard} ${
          selected.length !== 0 ? styles.Open : styles.Close
        }`}
      >
        <p style={{ paddingRight: "48px" }}>
          {selected.length} item(s) selected
        </p>
        <IconButton onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </Card>
      <Navbar style={{ justifyContent: "flex-end" }}>
        <IconButton onClick={() => navigate("create")}>
          <AddIcon />
        </IconButton>
      </Navbar>
      {_data && (
        <DataGrid
          data={_data?.data as T[]}
          columns={columns}
          selection
          setSelected={setSelected}
          clickable
          onRowClick={(id: string) => navigate(`${id}`)}
        />
      )}
    </BasePage>
  );
};
