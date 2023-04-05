import { useGetOne } from "hooks";
import { MessageDetails } from "../common/MessageDetails";
import { isReview } from "./reviews";

export const ReviewDetails = ({ id }: { id: number | string }) => {
  const { data } = useGetOne("review", { id });
  if (!data || !isReview(data.data)) {
    return null;
  }
  return <MessageDetails message={data.data} />
};
