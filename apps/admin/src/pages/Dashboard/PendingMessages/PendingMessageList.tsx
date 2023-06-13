import { useGetList } from "hooks";
import { Status } from "types";

const PendingMessageList = () => {
  const { data } = useGetList<"question">("question", {
    filter: {
      status: Status.PENDING,
    },
  });

  return (
    <div>
      {data?.data.map((message) => {
        return (
          <div key={message.name}>
            <p>{message.name}</p>
            <p>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PendingMessageList;
