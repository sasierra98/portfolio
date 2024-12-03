import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import "./App.jsx";
import "./scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>,
);
