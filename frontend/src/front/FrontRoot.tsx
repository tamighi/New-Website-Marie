import { Route, Routes, useLocation } from "react-router-dom"

import { Appbar } from "./components/generics/appbar/Appbar"
import { Background } from "./components/generics/Background"
import { HomePage } from "./components/pages/homePage/HomePage"
import { AnimatePage } from "./components/utils/AnimatePage"

import { ThemeProvider } from "./hooks/ThemeContext"

import "./styles/FrontRoot.css"

export const FrontRoot = () => {
  const location = useLocation()

  return (
    <div className="FrontRoot">
      <ThemeProvider>
        <Appbar />
        <Background />
        <AnimatePage>
          <Routes location={location} key={location.pathname}>
            <Route path="" element={<HomePage />} />
            <Route path="contact" element={<div>HomeContact</div>} />
          </Routes>
        </AnimatePage>
      </ThemeProvider>
    </div>
  )
}
