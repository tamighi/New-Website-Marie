import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Appbar } from "../components"
import { TestPage1 } from "./components/TestPage1"

export const App = () => {
  return (
    <div className="App">
      <div style={{ padding: "48px" }}>
        <Appbar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
