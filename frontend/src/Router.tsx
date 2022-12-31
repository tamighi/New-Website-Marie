import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { FrontRoot } from "./front/FrontRoot"

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontRoot />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
