"use client";

import { createTheme } from "@mui/material";

export const pricingTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6", // Blue-500
    },
    secondary: {
      main: "#a855f7", // Purple-500
    },
    background: {
      default: "#09090b", // Zinc 950
      paper: "#18181b", // Zinc 900
    },
    text: {
      primary: "#fafafa", // Zinc 50
      secondary: "#a1a1aa", // Zinc 400
    },
  },
  typography: {
    fontFamily: "var(--font-sans), sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "99px",
          padding: "10px 24px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backgroundImage: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "transparent",
          boxShadow: "none",
          "&:before": { display: "none" },
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        },
      },
    },
  },
});
