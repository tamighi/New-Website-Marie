import { QueryClient, QueryClientProvider } from "react-query";
import { AdminApp } from "./AdminApp";
import { ModalProvider } from "./contexts/ModalProvider";

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
