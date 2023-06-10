import { DialogProvider } from "lib";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { AuthProvider, MyQueryClientProvider } from "contexts";
import { Alert } from "components";

export const Root = () => {
  return (
    <BrowserRouter basename="admin">
      <AuthProvider>
        <MyQueryClientProvider>
          <DialogProvider Component={Alert}>
            <App />
          </DialogProvider>
        </MyQueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
