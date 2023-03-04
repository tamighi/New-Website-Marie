import React from "react";
import { Column, useTable, useRowSelect, Hooks, CellProps } from "react-table";
import { IndeterminateCheckbox } from "./IndeterminateCheckbox";

import { useTheme } from "../../providers";

import CSSClasses from "./DataGrid.css";

interface DataProps<T extends object> {
  data: T[];
  columns: Column<T>[];
}

type SelectDataProps<T> =
  | {
      selection: true;
      setSelected: React.Dispatch<React.SetStateAction<T[]>>;
    }
  | { selection?: false; setSelected?: undefined };

type RowClickDataProps<T> =
  | {
      clickable: true;
      onRowClick: (data: T) => void;
    }
  | { clickable?: false; onRowClick?: undefined };

export type DataGridProps<T extends object> = DataProps<T> &
  SelectDataProps<T> &
  RowClickDataProps<T>;

const DataGrid = <T extends object>({
  data,
  columns,
  selection = false,
  setSelected,
  clickable = false,
  onRowClick,
}: DataGridProps<T>) => {
  const plugins = [];

  if (selection) {
    plugins.push(useRowSelect);
    plugins.push((hooks: Hooks<T>) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }: CellProps<T>) => (
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
  } = useTable({ columns: columns, data: data }, ...plugins);

  React.useEffect(() => {
    if (setSelected) {
      setSelected(selectedFlatRows.map((row) => row.original));
    }
  }, [selectedFlatRows, setSelected]);

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
        {rows.map((row) => {
          prepareRow(row);
          const { key, ...rowProps } = row.getRowProps();
          return (
            <tr
              key={key}
              className={clickable ? CSSClasses.Clickable : ""}
              style={{
                backgroundColor: themeColors.background,
                transition: theme.transition,
              }}
              onClick={onRowClick ? () => onRowClick(row.values.id) : undefined}
              {...rowProps}
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
