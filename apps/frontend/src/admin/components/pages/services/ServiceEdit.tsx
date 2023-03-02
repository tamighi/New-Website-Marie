import { useParams } from "react-router-dom";

export const ServiceEdit = () => {
  const params = useParams();
  console.log(params.id)
  return <div>ServiceEdit {params.id}</div>;
};
