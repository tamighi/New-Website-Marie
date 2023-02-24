import React from "react";
import { Column, useTable, useRowSelect, Hooks } from "react-table";
import { useTheme } from "../../hooks";

import CSSClasses from "./DataGrid.css";
import { IndeterminateCheckbox } from "./IndeterminateCheckbox";

interface DataProps {
  data: object[];
  columns: Column<object>[];
}

type SelectDataProps =
  | {
      selection: true;
      setSelected: () => void;
    }
  | { selection?: false; setSelected?: undefined };

type DataGridProps = DataProps & SelectDataProps;

const DataGrid = ({
  data,
  columns,
  selection = false,
  setSelected,
}: DataGridProps) => {
  const _columns = React.useMemo(() => columns, [columns]);
  const _data = React.useMemo(() => data, [data]);

  const plugins = [];

  if (selection) {
    plugins.push(useRowSelect);
    plugins.push((hooks: Hooks<object>) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    });
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable({ columns: _columns, data: _data }, ...plugins);

  const theme = useTheme();

  const themeColors = theme.palette.darkMode
    ? theme.palette.dark
    : theme.palette.light;

  return (
    <table
      {...getTableProps()}
      style={{ color: themeColors.text, transition: theme.transition }}
      className={CSSClasses.DataGrid}
    >
      <thead>
        {headerGroups.map((headerGroup) => {
          const { key, ...headerGroupProps } =
            headerGroup.getHeaderGroupProps();
          return (
            <tr
              key={key}
              {...headerGroupProps}
              style={{
                backgroundColor: themeColors.primary,
                transition: theme.transition,
              }}
            >
              {headerGroup.headers.map((column) => {
                const { key, ...headerProps } = column.getHeaderProps();
                return (
                  <th key={key} {...headerProps}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          const { key, ...rowProps } = row.getRowProps();
          return (
            <tr
              key={key}
              {...rowProps}
              style={{
                backgroundImage:
                  index % 2 === 0
                    ? ""
                    : "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
                backgroundColor: themeColors.background,
                transition: theme.transition,
              }}
            >
              {row.cells.map((cell) => {
                const { key, ...cellProps } = cell.getCellProps();
                return (
                  <td key={key} {...cellProps}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataGrid;
