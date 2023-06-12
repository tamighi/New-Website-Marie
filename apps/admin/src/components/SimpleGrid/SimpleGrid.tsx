import React from "react";

import { Button, DataGrid } from "lib";

import { useNavigate } from "react-router-dom";
import { Column } from "react-table";

import { ResourceString, ResourceType } from "types";
import { useGetList } from "hooks";

const entryPerPage = 20;

export interface SimpleGridProps<R extends ResourceString> {
  resource: R;
  columns: Column<ResourceType<R>>[];
}

export const SimpleGrid = <R extends ResourceString>({
  resource,
  columns,
}: SimpleGridProps<R>) => {
  const [page, setPage] = React.useState(1);

  //const params = useGetSearchParams();
  const params = {
    range: [(page - 1) * entryPerPage, page * entryPerPage - 1],
  };

  const { data, isLoading, isError } = useGetList<R>(resource, params);

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
      <DataGrid
        data={data.data}
        columns={columns}
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
