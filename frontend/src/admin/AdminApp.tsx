import React from "react"
import { Route, Routes } from "react-router-dom"

import { Appbar } from "./components/generics/appbar/Appbar"
import { Sidebar } from "./components/generics/sidebar/Sidebar"

import useColors from "../lib/hooks/hooks/useColors"

import { ServicesPage } from "./components/pages/services/ServicesPage"

import "./AdminApp.css"

export const AdminApp = () => {
  const colors = useColors()
  const [openSidebar, setOpenSidebar] = React.useState(false)

  const toggleOpen = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <div
      className="AdminApp"
      style={{
        backgroundColor: colors.primaryColor,
      }}
    >
      <Appbar toggleSideBar={toggleOpen} />
      <div style={{ display: "flex" }}>
        <Sidebar open={openSidebar} toggleSideBar={toggleOpen} />
        <Routes>
          <Route path="" element={<div>HomeAdmin</div>} />
          <Route path="services" element={<ServicesPage />} />
        </Routes>
      </div>
    </div>
  )
}
