import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <HomePage />,
  },
  {
    path: "/portfolio/contact",
    element: <Contact />,
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
  contact: "/portfolio/contact",
};
