import { BrowserRouter, Route, Routes } from "react-router-dom"

import { FrontRoot } from "./front/FrontRoot"
import { AdminRoot } from "./admin/AdminRoot"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<FrontRoot />} />
        <Route path="/admin/*" element={<AdminRoot />} />
      </Routes>
    </BrowserRouter>
  )
}
