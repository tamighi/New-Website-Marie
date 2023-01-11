import { Route, Routes } from "react-router-dom"

export const AdminRoot = () => {
  return (
    <div>
      Admin
      <Routes>
        <Route path="" element={<div>HomeAdmin</div>} />
        <Route path="contact" element={<div>AdminContact</div>} />
      </Routes>
    </div>
  )
}
