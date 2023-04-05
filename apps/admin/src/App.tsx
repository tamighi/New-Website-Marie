import React from "react";
import { Route, Routes } from "react-router-dom";

import { Appbar } from "./components/generics/appbar/Appbar";
import { Sidebar } from "./components/generics/sidebar/Sidebar";
import { Dashboard } from "./components/pages/dashboard/Dashboard";

import { DevisPage } from "components/pages/messages/devis/DevisPage";
import { QuestionPage } from "components/pages/messages/questions/QuestionPage";
import { ReviewPage } from "components/pages/messages/reviews/ReviewPage";
import {
  ServiceCreate,
  ServiceEdit,
  ServicePage,
} from "./components/pages/services";

import styles from "./App.css";
import "./Global.css";

export const App = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  const toggleOpen = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div className={styles.App}>
      <Appbar toggleSideBar={toggleOpen} />
      <main className={styles.Main}>
        <Sidebar open={openSidebar} toggleSideBar={toggleOpen} />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route
            path="service/*"
            element={
              <Routes>
                <Route path="" element={<ServicePage />} />
                <Route path=":id" element={<ServiceEdit />} />
                <Route path="create" element={<ServiceCreate />} />
              </Routes>
            }
          />
          <Route path="question/*" element={<QuestionPage />} />
          <Route path="devis/*" element={<DevisPage />} />
          <Route path="review/*" element={<ReviewPage />} />
        </Routes>
      </main>
    </div>
  );
};
