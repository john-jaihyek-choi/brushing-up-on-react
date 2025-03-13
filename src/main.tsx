import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Menu from "./components/Menu/Menu";
import { MenuOptions } from "./components/Menu/types";
import APIFetchMethods from "./routes/APIFetchMethods";
import LoginForm from "./routes/LoginForm";
import Flexbox from "./routes/Flexbox";
import Hooks from "./routes/Hooks";

const menuOptions: MenuOptions[] = [
  {
    path: "/login-form",
    name: "Login Form",
  },
  {
    path: "/api-fetch-methods",
    name: "API Fetch Methods",
  },
  {
    path: "/flexbox",
    name: "Flexbox",
  },
  {
    path: "/hooks",
    name: "Hooks",
  },
  {
    path: "/performance-optimization",
    name: "Performance Optimization",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Menu options={menuOptions} />,
      },
      ...LoginForm,
      ...APIFetchMethods,
      ...Flexbox,
      ...Hooks,
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
