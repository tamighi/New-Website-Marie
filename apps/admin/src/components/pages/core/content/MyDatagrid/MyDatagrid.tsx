import React from "react";

import { Button, DataGrid, DeleteIcon, IconButton, useDialog } from "lib";

import { useNavigate } from "react-router-dom";
import { Column } from "react-table";

import { ResourceString, ResourceType } from "api/types";
import { useDeleteMany, useGetList, useGetSearchParams } from "hooks";
import { SelectedOptions } from "../..";

const entryPerPage = 20;

export interface MyDatagridProps<R extends ResourceString> {
  resource: R;
  columns: Column<ResourceType<R>>[];
}

// TODO: Set Search params when page changes
export const MyDatagrid = <R extends ResourceString>({
  resource,
  columns,
}: MyDatagridProps<R>) => {
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = React.useState<ResourceType<R>[]>([]);

  const params = useGetSearchParams();

  const { data, isLoading, isError } = useGetList<R>(resource, params);

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

  if (!data?.data || isError) {
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
        onRowClick={(value: ResourceType<R>) => navigate(`${value.id}`)}
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
