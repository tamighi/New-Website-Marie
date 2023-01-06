import { Outlet } from "react-router-dom"
import { Background } from "./components/generics/Background"

export const FrontRoot = () => {
  return (
    <div>
      <Background />
      Front
      <Outlet />
    </div>
  )
}
