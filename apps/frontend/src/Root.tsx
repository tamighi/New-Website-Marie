import { App } from "App";
import { BrowserRouter } from "react-router-dom";
import { MyThemeProvider } from "./providers/ThemeContext/ThemeContext";

export const Root = () => {
  return (
    <BrowserRouter>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </BrowserRouter>
  );
};
