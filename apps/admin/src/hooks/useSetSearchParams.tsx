import React from "react";
import { useSearchParams } from "react-router-dom";

export const useSetSearchParams = (params: { [k: string]: string }) => {
  const [_, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    setSearchParams((oldParams) => ({ ...oldParams, ...params }));
  }, []);
};
