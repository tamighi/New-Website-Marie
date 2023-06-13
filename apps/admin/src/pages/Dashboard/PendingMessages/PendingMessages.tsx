import { Card, Divider, HelpIcon } from "lib";

import PendingMessageHeader from "./PendingMessageHeader";
import PendingMessageList from "./PendingMessageList";

const PendingMessages = () => {
  return (
    <Card>
      <PendingMessageHeader Icon={HelpIcon} title="Messages en attentes" />
      <Divider />
      <PendingMessageList />
    </Card>
  );
};

export default PendingMessages;
