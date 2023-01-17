import { Route, Routes } from "react-router-dom"
import { Appbar } from "./components/generics/appbar/Appbar"

import "./AdminApp.css"

export const AdminApp = () => {
  return (
    <div className="AdminApp">
      <Appbar />
      Admin
      <Routes>
        <Route path="" element={<div>HomeAdmin</div>} />
        <Route path="contact" element={<div>AdminContact</div>} />
      </Routes>
    </div>
  )
}
