import { Column } from "react-table";
import { MyDatagrid } from "../core";
import { isQuestionArray, QuestionDto } from "./questions";

const columns: Column<QuestionDto>[] = [
  {
    accessor: "name",
    Header: "Nom",
  },
  {
    accessor: "email",
    Header: "Email",
  },
  {
    accessor: "message",
    Header: "Message",
    Cell: ({ value }) => (
      // Will need to use maxWidth on cell and width 100% on p
      <p
        style={{
          maxWidth: "200px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {value}
      </p>
    ),
  },
  {
    accessor: "date",
    Header: "Date",
  },
];

export const QuestionList = () => {
  return (
    <>
      <MyDatagrid
        isTArray={isQuestionArray}
        columns={columns}
        resource="question"
      />
    </>
  );
};
