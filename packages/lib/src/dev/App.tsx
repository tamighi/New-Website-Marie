import { TestPage } from "./components/TestPage";

import { useTheme } from "library";

import styles from "./App.css";
import "./Global.css";

export const App = () => {
  const theme = useTheme();

  return (
    <div
      className={styles.App}
      style={{
        backgroundColor: theme.palette.darkMode
          ? "rgba(0, 0, 128, 0.5)"
          : "rgba(255, 127, 80, 0.7)",
        transition: "background .6s",
      }}
    >
      <TestPage />
    </div>
  );
};
