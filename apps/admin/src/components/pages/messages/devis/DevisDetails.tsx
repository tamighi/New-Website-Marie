import { useGetOne } from "hooks";
import { MessageDetails } from "../common/MessageDetails";
import { isDevis } from "./devis";

export const DevisDetails = ({ id }: { id: number | string }) => {
  const { data } = useGetOne("devis", { id });
  if (!data || !isDevis(data.data)) {
    return null;
  }
  return <MessageDetails message={data.data} />
};
