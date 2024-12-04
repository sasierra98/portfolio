import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import HomePage from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Navigate replace to="/portfolio" />,
  }
]);

export const paths = {
  portfolio: "/portfolio",
  aboutMenu: "/portfolio/about",
  projectMenu: "/portfolio/project",
};
