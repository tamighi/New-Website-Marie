import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TestAppbar } from "./components/TestAppbar"
import { TestHomePage } from "./components/TestHomePage"

import "./App.css"

export const App = () => {
  return (
    <div className="App">
      <TestAppbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
