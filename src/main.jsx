import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Messenger from "./routes/Messenger";
const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Hello Universe</p>,
  },
  {
    path: "/messenger",
    element: <Messenger />,
  },
  {
    path: "/notification",
    element: <p>Hello Notification</p>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
