import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"

import { Appbar } from "./components/generics/appbar/Appbar"
import { Background } from "./components/generics/Background"
import { ContactPage } from "./components/pages/contactPage/ContactPage"
import { HomePage } from "./components/pages/homePage/HomePage"
import { useColors } from "./hooks/useColors"

import "./styles/FrontApp.css"

export const FrontApp = () => {
  const location = useLocation()
  const colors = useColors()

  return (
    <div className="FrontApp" style={{ color: colors.textColor }}>
      <Appbar />
      <Background />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
