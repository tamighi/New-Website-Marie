import React from "react";
import { Column, useTable, useRowSelect } from "react-table";
import { useTheme } from "../../hooks";

import CSSClasses from "./DataGrid.css";
import { IndeterminateCheckbox } from "./IndeterminateCheckbox";

export interface DataGridProps {
  data: object[];
  columns: Column<object>[];
}

const DataGrid = ({ data, columns }: DataGridProps) => {
  const _columns = React.useMemo(() => columns, [columns]);
  const _data = React.useMemo(() => data, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable({ columns: _columns, data: _data }, useRowSelect, (hooks) => {
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
        ...columns
      ];
    });
  });

  const theme = useTheme();

  const themeColors = theme.palette.darkMode
    ? theme.palette.dark
    : theme.palette.light;

  return (
    <table
      {...getTableProps()}
      style={{ color: themeColors.text }}
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
              style={{ backgroundColor: themeColors.primary }}
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
