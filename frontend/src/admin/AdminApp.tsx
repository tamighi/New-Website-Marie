import { Route, Routes } from "react-router-dom"
import { Appbar } from "./components/generics/appbar/Appbar"

import "./AdminApp.css"
import { Sidebar } from "./components/generics/sidebar/Sidebar"

export const AdminApp = () => {
  return (
    <div className="AdminApp">
      <Appbar />
      <Sidebar />
      Admin
      <Routes>
        <Route path="" element={<div>HomeAdmin</div>} />
        <Route path="contact" element={<div>AdminContact</div>} />
      </Routes>
    </div>
  )
}
