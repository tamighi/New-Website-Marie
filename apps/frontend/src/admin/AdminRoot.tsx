import { ModalProvider } from "lib";
import { QueryClient, QueryClientProvider } from "react-query";
import { AdminApp } from "./AdminApp";

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
      <ModalProvider>
        <AdminApp />
      </ModalProvider>
    </QueryClientProvider>
  );
};
