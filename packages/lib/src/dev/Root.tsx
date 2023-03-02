import { App } from "./App";
import DialogProvider from "../providers/DialogProvider";
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
