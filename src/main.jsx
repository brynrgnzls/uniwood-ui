import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Hello Universe</p>,
  },
  {
    path: "/messenger",
    element: <p>Hello Messenger</p>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
