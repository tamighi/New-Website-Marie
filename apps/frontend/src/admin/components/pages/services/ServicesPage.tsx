import React from "react";

import { useData } from "admin/hooks/useData";
import { DataGrid } from "lib";
import { BasePage } from "../BasePage";
import { Column } from "react-table";

interface ServiceDto {
  id: string;
  name: string;
  description: string;
}

const columns: Column<ServiceDto>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
];

export const ServicesPage = () => {
  const { data } = useData<ServiceDto>("service");

  const [selected, setSelected] = React.useState<string[]>([]);

  if (!data?.data) {
    return null;
  }
  return (
    <BasePage>
      <DataGrid
        data={data?.data}
        columns={columns}
        selection
        setSelected={setSelected}
      />
    </BasePage>
  );
};
