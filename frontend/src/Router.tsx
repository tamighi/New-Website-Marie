import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AdminRoot } from "./admin/AdminRoot"
import { ErrorPage } from "./ErrorPage"
import { FrontRoot } from "./front/FrontRoot"

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <FrontRoot />,
      },
      {
        path: "/admin",
        element: <AdminRoot />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
