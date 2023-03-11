import { Button, Card, CloseIcon, DataGrid, Drawer, IconButton } from "library";
import React from "react";
import { Column } from "react-table";
import styles from "../styles/Page.css";

interface Data {
  name?: string;
  age?: number;
  id?: number;
}

const data: Data[] = [
  { name: "Alfred", age: 30, id: 1 },
  { name: "Bob", age: 40, id: 3 },
  { name: "Stephan", age: 38, id: 2 },
  { name: "Josephine", age: 70, id: 4 },
];

const columns: Column<Data>[] = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
  { Header: "Id", accessor: "id" },
];

export const TestDataGrid = () => {
  const [selectedRows, setSelectedRows] = React.useState<Data[]>([]);
  const [open, setOpen] = React.useState(false);

  const onRowClick = React.useCallback((data: Data) => {
    console.log(data);
  }, []);

  return (
    <div className={styles.Page} style={{ position: "relative" }}>
      <DataGrid
        data={data}
        columns={columns}
        selection
        setSelected={setSelectedRows}
        clickable
        onRowClick={onRowClick}
      />
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: open ? "192px" : "12px",
          transition: "margin-right 225ms",
        }}
      >
        <Button onClick={() => setOpen(true)}>Open me !</Button>
        <Button onClick={() => setOpen(false)}>Close me !</Button>
      </Card>
      <Drawer
        variant="persistent"
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
        <span>Hello to ...</span>
        {selectedRows.map((data) => (
          <div key={data.id}>{data.name}</div>
        ))}
      </Drawer>
    </div>
  );
};
