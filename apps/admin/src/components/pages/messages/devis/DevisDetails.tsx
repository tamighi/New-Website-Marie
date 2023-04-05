import { useGetOne } from "hooks";
import { MessageDetails } from "../common/MessageDetails";

export const DevisDetails = ({ id }: { id: number | string }) => {
  const { data } = useGetOne("devis", { id });
  if (!data) {
    return null;
  }
  return <MessageDetails message={data.data} />
};
