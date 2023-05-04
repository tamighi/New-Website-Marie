import { DialogProvider } from "lib";
import { Alert } from "./components/generics/alert/Alert";
import { ReactQueryDevtools } from "react-query/devtools";
import { App } from "App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, MyQueryClientProvider } from "contexts";

export const Root = () => {
  return (
    <BrowserRouter basename="admin">
      <AuthProvider>
        <MyQueryClientProvider>
          <DialogProvider Component={Alert}>
            <App />
          </DialogProvider>
          <ReactQueryDevtools />
        </MyQueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
