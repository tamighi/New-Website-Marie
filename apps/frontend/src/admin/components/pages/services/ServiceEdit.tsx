import { useGetOne } from "admin/hooks/useData";
import { useParams } from "react-router-dom";

export const ServiceEdit = () => {
  const { id } = useParams<"id">() as { id: string };

  const { data } = useGetOne("service", id);

  if (!data) {
    return null;
  }
  return <div>ServiceEdit {id}</div>;
};
