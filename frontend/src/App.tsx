import { BrowserRouter, Route, Routes } from "react-router-dom"

import { FrontRoot } from "./front/FrontRoot"
import { AdminRoot } from "./admin/AdminRoot"

import "./App.css"

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<FrontRoot />} />
          <Route path="/admin/*" element={<AdminRoot />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
