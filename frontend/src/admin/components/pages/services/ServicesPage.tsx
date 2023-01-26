import DataGrid from "@lib/components/dataGrid/DataGrid"

const data = [
  { name: "Alfred", age: 30 },
  { name: "Bob", age: 40 },
]

type ColumnType = {
  Header: string
  accessor: "name" | "age"
}

const columns: ColumnType[] = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
]

export const ServicesPage = () => {
  return <DataGrid data={data} columns={columns} />
}
