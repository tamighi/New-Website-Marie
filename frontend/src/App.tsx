import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AdminRoot } from "./admin/AdminRoot"
import { FrontRoot } from "./front/FrontRoot"

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontRoot />,
    children: [
      {
        path: "",
        element: <div>HomeFront</div>,
      },
      {
        path: "contact",
        element: <div>HomeContact</div>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <div>HomeAdmin</div>,
      },
      {
        path: "contact",
        element: <div>ContactAdmin</div>,
      },
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
