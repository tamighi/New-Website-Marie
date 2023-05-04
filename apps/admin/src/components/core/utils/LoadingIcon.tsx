import { HomeIcon } from "lib";

export const LoadingIcon = ({ isLoading }: { isLoading: boolean }) => {
  return <HomeIcon style={{ visibility: isLoading ? "visible" : "hidden" }} />;
};
