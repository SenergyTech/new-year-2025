// src/theme.ts
import { createTheme } from "@mui/material/styles";

/** Brand colors */
const ink = "#0A0A0A"; // near-black page background
const inkPaper = "#111111"; // panels
const gold = "#D4AF37"; // primary gold
const gold2 = "#E0C167"; // light accent gold
const ivory = "#F7F2E4"; // warm off-white

declare module "@mui/material/styles" {
  interface Theme {
    deco: {
      hairline: string;
      panelBorder: string;
      goldGradient: string;
    };
  }
  interface ThemeOptions {
    deco?: {
      hairline?: string;
      panelBorder?: string;
      goldGradient?: string;
    };
  }
}

export const gatsbyTheme = createTheme({
  palette: {
    // Keep MUI in dark mode so default contrasts are correct,
    // but we won't offer any toggle.
    mode: "dark",
    primary: { main: gold, contrastText: ink },
    secondary: { main: gold2, contrastText: ink },
    background: { default: ink, paper: inkPaper },
    text: { primary: ivory, secondary: "#E6DBC2" },
    divider: "color-mix(in oklab, #D4AF37, transparent 65%)",
  },
  deco: {
    hairline: "1px solid color-mix(in oklab, #D4AF37, transparent 35%)",
    panelBorder: "1px solid color-mix(in oklab, #D4AF37, transparent 28%)",
    goldGradient: `linear-gradient(135deg, ${gold} 0%, ${gold2} 55%, #F0E6C8 100%)`,
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: `"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI"`,
    h1: {
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    h3: {
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    button: { textTransform: "none", fontWeight: 700, letterSpacing: "0.04em" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(1000px 600px at 15% -10%, rgba(212,175,55,.12), transparent)," +
            "radial-gradient(900px 500px at 100% 0%, rgba(224,193,103,.10), transparent)," +
            `linear-gradient(${ink}, #0C0C0C)`,
          color: ivory,
        },
        hr: {
          border: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,.9), transparent)",
          opacity: 0.75,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: ink,
          borderTop: "1px solid rgba(212,175,55,.35)",
          borderBottom: "1px solid rgba(212,175,55,.35)",
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "linear-gradient(180deg, #0B0B0B, #0E0E0E)",
          border: "1px solid rgba(212,175,55,.28)",
          boxShadow:
            "0 0 0 1px rgba(212,175,55,.28) inset, 0 12px 28px rgba(0,0,0,.5)",
          backdropFilter: "blur(6px)",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 9999,
          paddingInline: "1.25rem",
          paddingBlock: "0.6rem",
        },
        containedPrimary: {
          backgroundImage: `linear-gradient(135deg, ${gold}, ${gold2})`,
          color: ink,
          boxShadow:
            "0 0 0 1px rgba(212,175,55,.35), 0 10px 24px rgba(0,0,0,.5)",
          "&:hover": {
            filter: "brightness(1.06)",
            boxShadow:
              "0 0 0 1px rgba(212,175,55,.45), 0 12px 28px rgba(0,0,0,.56)",
          },
        },
        outlinedPrimary: {
          border: "1px solid rgba(212,175,55,.55)",
          color: gold2,
          "&:hover": {
            borderColor: gold2,
            backgroundColor: "rgba(212,175,55,.06)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: { root: { border: "1px solid rgba(212,175,55,.28)" } },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(212,175,55,.35)",
          opacity: 0.8,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h3: { color: gold2 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(212,175,55,.35)",
          backgroundColor: "rgba(255,255,255,0.03)",
          color: ivory,
        },
      },
    },
  },
});
