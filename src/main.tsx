import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import "./index.css";
import App from "./App.tsx";
import { AppThemeProvider } from "./ThemeContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      {/* CssBaseline resets browser styles and helps with dark mode */}
      <CssBaseline />
      <App />
    </AppThemeProvider>
  </StrictMode>
);
