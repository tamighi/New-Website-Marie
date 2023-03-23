import { App } from "App";
import { MyQueryClientProvider } from "providers/QueryClientProvider";
import { BrowserRouter } from "react-router-dom";
import { MyThemeProvider } from "./providers/ThemeContext/ThemeContext";

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
