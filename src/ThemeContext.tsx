// src/ThemeContext.tsx
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { gatsbyTheme } from "./theme";

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={gatsbyTheme}>{children}</ThemeProvider>;
}
