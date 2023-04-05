import { RightDrawer } from "components/pages/core";
import { useGetOne } from "hooks";
import { matchPath, useLocation } from "react-router-dom";
import { MessageDetails } from "../common/MessageDetails";
import { isDevis } from "./devis";

export const DevisDrawer = () => {
  const { data } = useGetOne("devis", { id: 1 });

  const location = useLocation();

  const match = matchPath("/devis/:id", location.pathname);

  if (!data || !isDevis(data.data)) {
    return null;
  }
  return (
    <RightDrawer open={!!match}>
      <MessageDetails message={data.data} />
    </RightDrawer>
  );
};
