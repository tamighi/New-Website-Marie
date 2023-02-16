import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TestAppbar } from "./components/TestAppbar"
import { TestHomePage } from "./components/TestHomePage"

import { useStyles } from "../hooks"

import "./App.css"

export const App = () => {
  const style = useStyles("background")

  return (
    <div className="App" style={style}>
      <TestAppbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
