import { FrontRoot } from "./FrontRoot"
import "./styles/FrontRoot.css"

const frontRouter = {
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
}

export default frontRouter
