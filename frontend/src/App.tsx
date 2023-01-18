import { BrowserRouter, Route, Routes } from "react-router-dom"

import { FrontRoot } from "./front/FrontRoot"
import { AdminRoot } from "./admin/AdminRoot"
import { ThemeProvider } from "./lib/hooks/contexts/ThemeContext"

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="*" element={<FrontRoot />} />
          <Route path="/admin/*" element={<AdminRoot />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
