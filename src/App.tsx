import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import router from "./router";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
