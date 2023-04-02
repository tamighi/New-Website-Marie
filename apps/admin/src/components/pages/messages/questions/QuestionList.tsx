import { MessageList } from "../common/MessageList";
import { isQuestionArray } from "./questions";

export const QuestionList = () => {
  return <MessageList isTArray={isQuestionArray} resource="question" />;
};
