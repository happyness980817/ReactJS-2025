import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  useParams,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./routes/Home.jsx";
import Detail from "./routes/Detail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/movie/:id",
    Component: Detail,
  },
  {
    path: "/about-us",
    element: <h1>Hello</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
