import React from "react";
import { BasePage, SelectedOptions, Toolbar } from "..";
import { DataGrid, DeleteIcon, IconButton, useDialog } from "lib";

import { useNavigate } from "react-router-dom";
import { useDeleteMany, useGetList } from "admin/hooks/useData";

import { Column } from "react-table";

export const DataGridLayout = <T extends { id: string | number }>({
  ressource,
  columns,
}: {
  ressource: string;
  columns: Column<T>[];
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

  if (isError) {
    return <div>Error</div>;
  }

  if (isFetching) {
    return <div>Loading ...</div>;
  }

  if (!data?.data || data.count === 0) {
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
        data={data.data as T[]}
        columns={columns}
        selection
        setSelected={setSelected}
        clickable
        onRowClick={(value: T) => navigate(`${value.id}`)}
      />
    </BasePage>
  );
};
