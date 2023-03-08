import React from "react";
import { Route, Routes } from "react-router-dom";

import { Appbar } from "./components/generics/appbar/Appbar";
import { Sidebar } from "./components/generics/sidebar/Sidebar";
import { Dashboard } from "./components/pages/dashboard/Dashboard";

import { ServiceCreate, ServicePage } from "./components/pages/services";

import styles from "./AdminApp.css";

export const AdminApp = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  const toggleOpen = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div className={styles.AdminApp}>
      <Appbar toggleSideBar={toggleOpen} />
      <main className={styles.AdminMain}>
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
