import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { Route, Routes } from "react-router-dom";
import { ServiceDetails } from "./ServiceDetails";
import { ServiceMain } from "./ServiceMain";

export const ServicePage = () => {

  return (
    <CenteredPage>
    <Routes>
      <Route path="" element={<ServiceMain />} />
      <Route path=":id" element={<ServiceDetails />} />
    </Routes>
    </CenteredPage>
  );
};
