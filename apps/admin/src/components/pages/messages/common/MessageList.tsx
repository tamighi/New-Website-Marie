import React from "react";

import { ResourceType } from "api/types";
import { MyDatagrid } from "components/pages/core";
import { Column } from "react-table";

type MessageResourceString = "question" | "review" | "devis";

const messageColumns: Column<ResourceType<MessageResourceString>>[] = [
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

type MessageListProps<R extends MessageResourceString> = {
  additionnalColumn?: Column<ResourceType<R>>[];
  resource: R;
};

export const MessageList = <R extends MessageResourceString>(
  props: MessageListProps<R>
) => {
  const { additionnalColumn = [], resource } = props;

  const columns = React.useMemo(
    () => [...additionnalColumn, ...(messageColumns as Column<ResourceType<R>>[])],
    []
  );

  return <MyDatagrid columns={columns} resource={resource} />;
};
