import React from "react";
import { BasePage, Toolbar } from "..";
import { Card, DataGrid, DeleteIcon, IconButton, useDialog } from "lib";

import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useGetData } from "admin/hooks/useData";
import { dataProvider } from "admin/api/dataProvider";

import { Column } from "react-table";
import { SelectedOptions } from "../SelectedOptions/SelectedOptions";

export const DataGridLayout = <T extends { id: number }>({
  ressource,
  columns,
  isTArray,
}: {
  ressource: string;
  columns: Column<T>[];
  isTArray: (obj: object) => obj is T[];
}) => {
  const [selected, setSelected] = React.useState<T[]>([]);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data } = useGetData(ressource);

  const { showDialog } = useDialog();
  const onDeleteClick = async () => {
    await dataProvider.deleteMany(ressource, {
      ids: selected.map((value) => value.id),
    });
    showDialog?.({ content: `${selected.length} item(s) deleted` });
    queryClient.invalidateQueries(ressource);
  };

  const memoizedData = React.useMemo(() => data, [data]);
  if (memoizedData && !isTArray(memoizedData.data)) {
    return null;
  }

  return (
    <BasePage>
      <Toolbar />
      <SelectedOptions selected={selected}>
        <IconButton onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </SelectedOptions>
      {memoizedData && isTArray(memoizedData.data) && (
        <DataGrid
          data={memoizedData.data}
          columns={columns}
          selection
          setSelected={setSelected}
          clickable
          onRowClick={(value: T) => navigate(`${value.id}`)}
        />
      )}
    </BasePage>
  );
};
