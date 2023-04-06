import React from "react";

import { ResourceType } from "api/types";
import { MyDatagrid, SimpleGrid } from "components/pages/core";
import { Column } from "react-table";
import { useIsSmall } from "hooks";

type MessageResourceString = "question" | "review" | "devis";

const messageColumns: Column<ResourceType<MessageResourceString>>[] = [
  {
    accessor: "name",
    Header: "Nom",
    maxWidth: 50,
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
  },
  {
    accessor: "email",
    Header: "Email",
    maxWidth: 50,
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
  },
  {
    accessor: "message",
    Header: "Message",
    maxWidth: 50,
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
  const isSmall = useIsSmall();

  const columns = React.useMemo(
    () => [
      ...additionnalColumn,
      ...(messageColumns as Column<ResourceType<R>>[]),
    ],
    []
  );

  return (
    <>
      {isSmall ? (
        <SimpleGrid columns={columns} resource={resource} />
      ) : (
        <MyDatagrid columns={columns} resource={resource} />
      )}
    </>
  );
};
