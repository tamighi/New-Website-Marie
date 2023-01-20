import { Route, Routes } from "react-router-dom"
import { NavigationBars } from "./components/generics/NavigationBars"

import "./AdminApp.css"

export const AdminApp = () => {
  return (
    <div className="AdminApp">
    <NavigationBars />
      Admin
      <Routes>
        <Route path="" element={<div>HomeAdmin</div>} />
        <Route path="contact" element={<div>AdminContact</div>} />
      </Routes>
    </div>
  )
}
