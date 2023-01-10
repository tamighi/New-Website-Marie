import { FrontRoot } from "./FrontRoot"
import { HomePage } from "./components/pages/homePage/HomePage"

const frontRouter = {
  path: "/",
  element: <FrontRoot />,
  children: [
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "contact",
      element: <div>HomeContact</div>,
    },
  ],
}

export default frontRouter
