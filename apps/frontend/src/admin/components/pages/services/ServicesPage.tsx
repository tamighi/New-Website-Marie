import React from "react";

import { useData } from "admin/hooks/useData";
import { DataGrid } from "lib";
import { BasePage } from "../BasePage";

interface ServiceCategoriesDto {
  id: string;
  name: string;
  description: string;
}

const columns = [
  { Header: "Id", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
];

export const ServicesPage = () => {
  const { data } = useData("service");
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
