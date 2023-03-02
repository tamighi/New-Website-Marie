import React from "react";
import { Column } from "react-table";
import { DataGrid } from "../../components";
import "../styles/Page.css";

interface Data {
  name: string;
  age: number;
  id: number;
}

const data: Data[] = [
  { name: "Alfred", age: 30, id: 1 },
  { name: "Bob", age: 40, id: 3 },
];

const columns: Column<Data>[] = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
  { Header: "Id", accessor: "id" },
];

export const TestDataGrid = () => {
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

  const onRowClick = (id: string) => {
    console.log(id);
  };

  return (
    <div className="Page" style={{ margin: "20px" }}>
      <DataGrid
        data={data}
        columns={columns}
        selection
        setSelected={setSelectedRows}
        clickable
        onRowClick={onRowClick}
      />
    </div>
  );
};
