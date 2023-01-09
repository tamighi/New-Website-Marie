import { createBrowserRouter, RouterProvider } from "react-router-dom"
import frontRouter from "./front/FrontRoutes"
import adminRouter from "./admin/AdminRoutes"
import { ThemeProvider } from "./front/hooks/ThemeContext"

const router = createBrowserRouter([frontRouter, adminRouter])

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
