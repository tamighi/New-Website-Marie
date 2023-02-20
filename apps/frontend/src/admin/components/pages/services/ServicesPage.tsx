import { DataGrid } from "lib";
import { dataProvider } from "../../../api/dataProvider";

interface ServiceCategoriesDto {
  name: string;
  description: string;
}

const data = [
  { name: "Alfred", age: 30 },
  { name: "Bob", age: 40 },
];

type ColumnType = {
  Header: string;
  accessor: "name" | "age";
};

const columns: ColumnType[] = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
];

export const ServicesPage = () => {
  const onClick = () => {
    dataProvider.create<ServiceCategoriesDto>("serviceCategories", {
      data: {
        name: "test",
        description: "description test",
      },
    });
  };
  return (
    <div style={{ flexGrow: 1 }}>
      <DataGrid data={data} columns={columns} />
    </div>
  );
};
