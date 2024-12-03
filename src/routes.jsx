import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <HomePage />,
  },
]);

export const paths = {
  portfolio: "/portfolio",
  aboutMenu: "/portfolio/about",
  projectMenu: "/portfolio/project",
};
