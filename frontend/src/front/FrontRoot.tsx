import { Outlet } from "react-router-dom"
import { Background } from "./components/generics/Background"
import "./styles/FrontRoot.css"

export const FrontRoot = () => {
  return (
    <div className="FrontRoot">
      Front
      <Background />
      <Outlet />
    </div>
  )
}
