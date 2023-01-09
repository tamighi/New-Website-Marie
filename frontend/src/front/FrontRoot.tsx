import { Outlet } from "react-router-dom"

import { Appbar } from "./components/generics/Appbar"
import { Background } from "./components/generics/Background"

import "./styles/FrontRoot.css"

export const FrontRoot = () => {
  return (
    <div className="FrontRoot">
      <Appbar />
      <Background />
      <Outlet />
    </div>
  )
}
