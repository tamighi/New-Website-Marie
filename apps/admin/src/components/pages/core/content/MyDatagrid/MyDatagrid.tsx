import React from "react";

import { Button, DataGrid, DeleteIcon, IconButton, useDialog } from "lib";

import { useNavigate } from "react-router-dom";
import { Column } from "react-table";

import { SelectedOptions } from "../..";
import { useDeleteMany, useGetList, useGetSearchParams } from "hooks";
import { ResourceType } from "api/dataProvider";

const entryPerPage = 20;

export interface MyDatagridProps<T extends object> {
  resource: ResourceType;
  columns: Column<T>[];
  isTArray: (obj: object) => obj is T[];
}

export const MyDatagrid = <T extends { id: string | number }>({
  resource,
  columns,
  isTArray,
}: MyDatagridProps<T>) => {
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = React.useState<T[]>([]);

  const params = useGetSearchParams();

  const { data, isLoading, isError } = useGetList(resource, params);

  const { showDialog } = useDialog();

  const { mutate } = useDeleteMany(resource, {
    onSuccess: () =>
      showDialog?.({ content: `${selected.length} item(s) deleted` }),
  });

  const onDeleteClick = async () => {
    mutate({ ids: selected.map((value) => value.id) });
  };

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Fetching ...</div>;
  }

  if (!data?.data || isError || !isTArray(data.data)) {
    return <div>Error !</div>;
  }

  if (data.count === 0) {
    return <div>No data found ... </div>;
  }

  return (
    <>
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
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </Button>
      <Button
        disabled={page === Math.ceil(data.count / entryPerPage)}
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
    </>
  );
};
