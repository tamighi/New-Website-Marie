import { useMediaQuery } from "lib";

export const useIsSmall = () => {
  return useMediaQuery("only screen and (max-width: 800px)");
};
