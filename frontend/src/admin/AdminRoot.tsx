import { Outlet } from "react-router-dom"

export const AdminRoot = () => {
  return (
    <div>
      Admin
      <Outlet />
    </div>
  )
}
