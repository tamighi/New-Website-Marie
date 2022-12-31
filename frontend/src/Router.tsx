import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorPage } from "./front/ErrorPage"
import { FrontRoot } from "./front/FrontRoot"

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontRoot />,
    errorElement: <ErrorPage />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
