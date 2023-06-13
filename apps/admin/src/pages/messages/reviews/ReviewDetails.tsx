import { useGetCurrentQuery, useGetOne } from "hooks";
import { MessageDetails } from "../common";

const ReviewDetails = ({ id }: { id: number | string }) => {
  const query = useGetCurrentQuery();
  const { data } = useGetOne("review", { id }, query);
  if (!data) {
    return null;
  }
  return <MessageDetails message={data.data} />;
};

export default ReviewDetails;
