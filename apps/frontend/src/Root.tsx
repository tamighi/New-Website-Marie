import { App } from "App";
import { MyQueryClientProvider } from "contexts/QueryClientProvider";
import { BrowserRouter } from "react-router-dom";
import { MyThemeProvider } from "./contexts/ThemeContext";

export const Root = () => {
  return (
    <BrowserRouter>
      <MyThemeProvider>
      <MyQueryClientProvider>
        <App />
        </MyQueryClientProvider>
      </MyThemeProvider>
    </BrowserRouter>
  );
};
