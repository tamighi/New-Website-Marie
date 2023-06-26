import { AlertProvider } from "lib";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { AuthProvider, MyQueryClientProvider } from "contexts";

import { ReactQueryDevtools } from "react-query/devtools";

export const Root = () => {
  return (
    <BrowserRouter basename="admin">
      <AuthProvider>
        <MyQueryClientProvider>
          <AlertProvider>
            <App />
          </AlertProvider>
          <ReactQueryDevtools />
        </MyQueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
