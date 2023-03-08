import React from "react";
import { Route, Routes } from "react-router-dom";

import { Appbar } from "./components/generics/appbar/Appbar";
import { Sidebar } from "./components/generics/sidebar/Sidebar";
import { Dashboard } from "./components/pages/dashboard/Dashboard";

import { ServiceCreate, ServicePage } from "./components/pages/services";

import styles from "./App.css";
import "./Global.css"

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
          <Route path="services/*" element={<ServicePage />} />
          <Route path="services/create" element={<ServiceCreate />} />
        </Routes>
      </main>
    </div>
  );
};
