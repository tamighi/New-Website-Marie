import { DialogProvider } from "lib";
import { AdminApp } from "./AdminApp";
import { Alert } from "./components/generics/alert/Alert";
import { AuthProvider } from "./providers/AuthProvider";
import { ReactQueryDevtools } from "react-query/devtools"
import { MyQueryClientProvider } from "./providers/QueryClientProvider";

export const AdminRoot = () => {
  return (
    <AuthProvider>
      <MyQueryClientProvider>
        <DialogProvider Component={Alert}>
          <AdminApp />
        </DialogProvider>
        <ReactQueryDevtools />
      </MyQueryClientProvider>
    </AuthProvider>
  );
};
