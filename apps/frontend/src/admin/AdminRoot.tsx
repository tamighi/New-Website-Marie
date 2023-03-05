import { DialogProvider } from "lib";
import { QueryClient, QueryClientProvider } from "react-query";
import { AdminApp } from "./AdminApp";
import { Alert } from "./components/generics/alert/Alert";
import { AuthProvider } from "./providers/AuthProvider";

export const AdminRoot = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <DialogProvider Component={Alert}>
          <AdminApp />
        </DialogProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
};
