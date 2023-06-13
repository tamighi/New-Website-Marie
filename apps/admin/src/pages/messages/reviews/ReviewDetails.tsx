import { SimpleField } from "components";
import { useGetCurrentQuery, useGetOne } from "hooks";
import { MessageDetails } from "../common";

const ReviewDetails = ({ id }: { id: number | string }) => {
  const query = useGetCurrentQuery();
  const { data } = useGetOne("review", { id }, query);
  if (!data) {
    return null;
  }
  const review = data.data;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <SimpleField label="Note">
      {review.note}
    </SimpleField>
      <MessageDetails message={review} />
    </div>
  );
};

export default ReviewDetails;
