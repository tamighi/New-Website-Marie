import { DialogProvider } from "lib";
import { Alert } from "./components/generics/alert/Alert";
import { AuthProvider } from "./providers/AuthProvider";
import { ReactQueryDevtools } from "react-query/devtools";
import { MyQueryClientProvider } from "./providers/QueryClientProvider";
import { App } from "App";
import { BrowserRouter } from "react-router-dom";

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
