import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/Router";
import { RouterProvider } from "react-router";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CookiesProvider>
  </StrictMode>
);
