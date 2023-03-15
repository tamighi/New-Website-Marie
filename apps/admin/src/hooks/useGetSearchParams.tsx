import { useSearchParams } from "react-router-dom";

export const baseQuery = {
  filter: "{}",
  range: "[0, 19]",
  sort: '["id", "DESC"]',
};

export const useGetSearchParams = () => {
  const [params] = useSearchParams();

  return {
    ...baseQuery,
    ...Object.fromEntries(params),
  };
};
