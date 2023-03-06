import React from "react";
import { BasePage, SelectedOptions, Toolbar } from "..";
import { DataGrid, DeleteIcon, IconButton, useDialog } from "lib";

import { useNavigate } from "react-router-dom";
import { useDeleteMany, useGetList } from "admin/hooks/useData";

import { Column } from "react-table";

export const DataGridLayout = <T extends { id: string | number }>({
  ressource,
  columns,
  isTArray,
}: {
  ressource: string;
  columns: Column<T>[];
  isTArray: (obj: object) => obj is T[];
}) => {
  const { data, isError, isFetching, error } = useGetList(ressource);

  const [selected, setSelected] = React.useState<T[]>([]);
  const deleteMany = useDeleteMany(ressource);
  const { showDialog } = useDialog();

  const onDeleteClick = async () => {
    await deleteMany({ ids: selected.map((value) => value.id) });
    showDialog?.({ content: `${selected.length} item(s) deleted` });
  };

  const navigate = useNavigate();

  if (isFetching) {
    return <div>Loading ...</div>;
  }

  if (!data?.data || isError || !isTArray(data.data)) {
    return <div>Error</div>;
  }

  if (data.count === 0) {
    return <div>No data found ... </div>;
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
        data={data.data}
        columns={columns}
        selection
        setSelected={setSelected}
        clickable
        onRowClick={(value: T) => navigate(`${value.id}`)}
      />
    </BasePage>
  );
};
