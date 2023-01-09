import { createBrowserRouter, RouterProvider } from "react-router-dom"
import frontRouter from "./front/FrontRoutes"
import adminRouter from "./admin/AdminRoutes"

const router = createBrowserRouter([frontRouter, adminRouter])

export const App = () => {
  return <RouterProvider router={router} />
}
