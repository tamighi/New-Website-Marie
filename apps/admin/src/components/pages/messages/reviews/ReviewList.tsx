import { MessageList } from "../common/MessageList";
import { isReviewArray } from "./reviews";

export const ReviewList = () => {
  return <MessageList isTArray={isReviewArray} resource="review" />;
};
