import React from "react";

import { Button, DataGrid } from "lib";

import { useNavigate } from "react-router-dom";
import { Column } from "react-table";

import { ResourceString, ResourceType } from "types";
import { useGetCurrentQuery, useGetList, useSetQuery } from "hooks";
import { ApiErrorImage, EmptyData, Loader } from "components";

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

  const query = useGetCurrentQuery();
  const setQuery = useSetQuery();

  React.useEffect(() => {
    setQuery({range: [(page - 1) * entryPerPage, page * entryPerPage - 1]})
    }, [page])


  const { data, isLoading, isError } = useGetList<R>(resource, query);

  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (!data?.data || isError) {
    return <ApiErrorImage />;
  }

  if (data.count === 0) {
    return <EmptyData />;
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
