import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./styles.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
])

export const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
