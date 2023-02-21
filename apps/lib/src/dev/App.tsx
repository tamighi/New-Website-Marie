import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestAppbar } from "./components/TestAppbar";
import { TestHomePage } from "./components/TestHomePage";
import { TestDataGrid } from "./components/TestDataGrid";

import { useStyles } from "../hooks";

import "./App.css";

export const App = () => {
  const style = useStyles("background");

  return (
    <div className="App" style={style}>
      <BrowserRouter>
        <TestAppbar />
        <Routes>
          <Route path="/" element={<TestHomePage />} />
          <Route path="/dataGrid" element={<TestDataGrid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
