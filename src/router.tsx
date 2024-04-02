import { createBrowserRouter } from "react-router-dom";

import { Home, NotFound } from "./features/misc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
