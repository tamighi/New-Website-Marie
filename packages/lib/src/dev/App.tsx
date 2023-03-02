import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestAppbar } from "./components/TestAppbar";
import { TestHomePage } from "./components/TestHomePage";
import { TestDataGrid } from "./components/TestDataGrid";
import { TestForm } from "./components/TestForm";

import { useStyles } from "library";

import styles from "./App.css";
import "./Global.css";

export const App = () => {
  const style = useStyles("background");

  return (
    <div className={styles.App} style={style}>
      <BrowserRouter>
        <TestAppbar />
        <Routes>
          <Route path="/" element={<TestHomePage />} />
          <Route path="/dataGrid" element={<TestDataGrid />} />
          <Route path="/form" element={<TestForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
