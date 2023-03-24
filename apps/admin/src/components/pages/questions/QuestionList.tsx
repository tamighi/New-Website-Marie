import { Column } from "react-table";
import { MyDatagrid } from "../core";
import { isQuestionArray, QuestionDto } from "./questions";

const columns: Column<QuestionDto>[] = [
  {
    accessor: "message",
    Header: "Message",
  },
  {
    accessor: "name",
    Header: "Nom",
  },
  {
    accessor: "email",
    Header: "Email",
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
