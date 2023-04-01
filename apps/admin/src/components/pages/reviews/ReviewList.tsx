import { Column } from "react-table";
import { MyDatagrid } from "../core";
import { isReviewArray, ReviewDto } from "./reviews";

const columns: Column<ReviewDto>[] = [
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

export const ReviewList = () => {
  return (
    <>
      <MyDatagrid
        isTArray={isReviewArray}
        columns={columns}
        resource="review"
      />
    </>
  );
};
