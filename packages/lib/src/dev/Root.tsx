import { App } from "./App";
import { DialogProvider } from "..";
import { MyThemeProvider } from "./providers/MyThemeProvider";

export const Root = () => {
  return (
    <DialogProvider>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </DialogProvider>
  );
};
