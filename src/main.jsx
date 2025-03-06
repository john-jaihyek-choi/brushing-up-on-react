import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import MenuOptions from "./MenuOptions";
import APIFetchMethods from "./routes/APIFetchMethods";
import LoginForm from "./routes/LoginForm";
import Flexbox from "./routes/Flexbox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MenuOptions />,
      },
      ...LoginForm,
      ...APIFetchMethods,
      ...Flexbox,
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
