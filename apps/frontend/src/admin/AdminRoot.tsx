import { DialogProvider } from "lib";
import { QueryClient, QueryClientProvider } from "react-query";
import { AdminApp } from "./AdminApp";
import { Alert } from "./components/generics/alert/Alert";

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
    <QueryClientProvider client={queryClient}>
      <DialogProvider Component={Alert}>
        <AdminApp />
      </DialogProvider>
    </QueryClientProvider>
  );
};
