import { AdminRoot } from "./AdminRoot"

const adminRouter = {
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
}

export default adminRouter
