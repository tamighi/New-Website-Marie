import React from "react"
import { Route, Routes } from "react-router-dom"

import { Appbar } from "./components/generics/appbar/Appbar"
import { Sidebar } from "./components/generics/sidebar/Sidebar"

import { ServicesPage } from "./components/pages/services/ServicesPage"

import "./AdminApp.css"

export const AdminApp = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false)

  const toggleOpen = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <div className="AdminApp">
      <Appbar toggleSideBar={toggleOpen} />
      <main className="AdminMain">
        <Sidebar open={openSidebar} toggleSideBar={toggleOpen} />
        <Routes>
          <Route path="" element={<div>HomeAdmin</div>} />
          <Route path="services" element={<ServicesPage />} />
        </Routes>
      </main>
    </div>
  )
}
