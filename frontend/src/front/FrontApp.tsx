import { Route, Routes, useLocation } from "react-router-dom"

import { Appbar } from "./components/generics/appbar/Appbar"
import { Background } from "./components/generics/Background"
import { HomePage } from "./components/pages/homePage/HomePage"
import { AnimatePage } from "./components/utils/AnimatePage"
import { useColors } from "./hooks/useColors"

import "./styles/FrontApp.css"

export const FrontApp = () => {
  const location = useLocation()
  const colors = useColors()

  return (
    <div className="FrontApp" style={{ color: colors.textColor }}>
      <Appbar />
      <Background />
      <AnimatePage>
        <Routes location={location}>
          <Route path="" element={<HomePage />} />
          <Route path="contact" element={<div>HomeContact</div>} />
        </Routes>
      </AnimatePage>
    </div>
  )
}
