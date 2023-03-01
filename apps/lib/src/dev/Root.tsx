import { ModalProvider } from "../providers";
import { App } from "./App";
import { MyThemeProvider } from "./providers/MyThemeProvider";

export const Root = () => {
  return (
    <ModalProvider>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </ModalProvider>
  );
};
