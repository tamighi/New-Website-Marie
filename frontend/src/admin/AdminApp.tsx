import { Route, Routes } from "react-router-dom"
import { Appbar } from "./components/generics/appbar/Appbar"
import { Sidebar } from "./components/generics/sidebar/Sidebar"

import "./AdminApp.css"
import React from "react"

export const AdminApp = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false)

  const toggleOpen = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <div className="AdminApp">
      <Appbar toggleSideBar={toggleOpen} />
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar open={openSidebar} toggleSideBar={toggleOpen} />
        <Routes>
          <Route path="" element={<div>HomeAdmin</div>} />
          <Route path="contact" element={<div>AdminContact</div>} />
        </Routes>
      </div>
    </div>
  )
}
