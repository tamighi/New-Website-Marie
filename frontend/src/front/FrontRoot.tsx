import { Route, Routes } from "react-router-dom"

import { Appbar } from "./components/generics/appbar/Appbar"
import { Background } from "./components/generics/Background"
import { HomePage } from "./components/pages/homePage/HomePage"

import "./styles/FrontRoot.css"

export const FrontRoot = () => {
  return (
    <div className="FrontRoot">
      <Appbar />
      <Background />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="contact" element={<div>HomeContact</div>} />
      </Routes>
    </div>
  )
}
