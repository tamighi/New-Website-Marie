import React from "react";
import { BasePage, SelectedOptions, Toolbar } from "..";
import { DataGrid, DeleteIcon, IconButton, useDialog } from "lib";

import { useNavigate } from "react-router-dom";
import { useDeleteMany, useGetList } from "admin/hooks/useData";

import { Column } from "react-table";

export const DataGridLayout = <T extends { id: number }>({
  ressource,
  columns,
  isTArray,
}: {
  ressource: string;
  columns: Column<T>[];
  isTArray: (obj: object) => obj is T[];
}) => {
  const { data } = useGetList(ressource);
  const memoizedData = React.useMemo(() => data, [data]);

  const [selected, setSelected] = React.useState<T[]>([]);
  const deleteMany = useDeleteMany(ressource);
  const { showDialog } = useDialog();

  const onDeleteClick = async () => {
    await deleteMany(selected.map((value) => value.id));
    showDialog?.({ content: `${selected.length} item(s) deleted` });
  };

  const navigate = useNavigate();

  if (!memoizedData || !isTArray(memoizedData.data)) {
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
      <DataGrid
        data={memoizedData.data}
        columns={columns}
        selection
        setSelected={setSelected}
        clickable
        onRowClick={(value: T) => navigate(`${value.id}`)}
      />
    </BasePage>
  );
};
