import React from "react"
import { Route, Routes } from "react-router-dom"

import { Appbar } from "./components/generics/appbar/Appbar"
import { Sidebar } from "./components/generics/sidebar/Sidebar"

import { ServicesPage } from "./components/pages/services/ServicesPage"

import useColors from "@lib/hooks/hooks/useColors"

import "./AdminApp.css"

export const AdminApp = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false)

  //useColors({
  //lightPrimaryColor: "blue",
  //darkPrimaryColor: "black",
  //lightSecondaryColor: "blue",
  //darkSecondaryColor: "black",
  //lightTextColor: "black",
  //darkTextColor: "white",
  //})

  const toggleOpen = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <div className="AdminApp">
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
