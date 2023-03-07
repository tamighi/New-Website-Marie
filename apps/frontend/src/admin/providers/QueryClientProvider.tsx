import { QueryClient, QueryClientProvider } from "react-query";
import { useAuthContext } from "./AuthProvider";

export const MyQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const authContext = useAuthContext();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
        refetchOnWindowFocus: false,
        suspense: true,
        /*
        onError: (error) => {
          authContext?.setAuthenticated(false);
        },
        */
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
