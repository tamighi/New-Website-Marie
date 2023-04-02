import { MessageList } from "../common/MessageList";
import { isDevisArray } from "./devis";

export const DevisList = () => {
  return <MessageList isTArray={isDevisArray} resource="devis" />;
};
