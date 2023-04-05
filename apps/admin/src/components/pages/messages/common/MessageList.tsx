import React from "react";

import { MyDatagrid } from "components/pages/core";
import { Column } from "react-table";
import { MessageDto } from "./message";

const messageColumns: Column<MessageDto>[] = [
  {
    accessor: "name",
    Header: "Nom",
    maxWidth: 150,
  },
  {
    accessor: "email",
    Header: "Email",
    maxWidth: 150,
  },
  {
    accessor: "message",
    Header: "Message",
    Cell: ({ value }) => (
      <span
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
        }}
      >
        {value}
      </span>
    ),
    maxWidth: 150,
  },
  {
    accessor: "date",
    Header: "Date",
    Cell: ({ value }) => {
      if (!value) {
        return null;
      }
      const date = new Date(value).toLocaleDateString();

      return <span>{date}</span>;
    },
  },
];

type MessageResourceType = "question" | "review" | "devis";

type Props<T extends MessageDto> = {
  additionnalColumn?: Column<T>[];
  isTArray: any;
  resource: MessageResourceType;
};

export const MessageList = <T extends MessageDto>(props: Props<T>) => {
  const { additionnalColumn = [], isTArray, resource } = props;

  const columns = React.useMemo(
    () => [...additionnalColumn, ...(messageColumns as Column<T>[])],
    []
  );

  return (
    <MyDatagrid<T> isTArray={isTArray} columns={columns} resource={resource} />
  );
};
