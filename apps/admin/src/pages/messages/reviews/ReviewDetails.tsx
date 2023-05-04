import { useGetOne } from "hooks";
import { MessageDetails } from "../common";

const ReviewDetails = ({ id }: { id: number | string }) => {
  const { data } = useGetOne("review", { id });
  if (!data) {
    return null;
  }
  return <MessageDetails message={data.data} />;
};

export default ReviewDetails;
