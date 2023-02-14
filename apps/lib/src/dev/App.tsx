import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TestAppbar } from "./components/TestAppbar"
import { TestPage1 } from "./components/TestPage1"

export const App = () => {
  return (
    <div className="App">
      <div style={{ padding: "48px" }}>
        <TestAppbar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
