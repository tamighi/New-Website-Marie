import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FrontRoot } from "./front/FrontRoot";
import { AdminRoot } from "./admin/AdminRoot";

import styles from "./App.css";
import "./Global.css";

export const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<FrontRoot />} />
          <Route path="/admin/*" element={<AdminRoot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
