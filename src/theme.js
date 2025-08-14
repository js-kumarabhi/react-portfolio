import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

export const themes = {
  light: {
    palette: {
      mode: 'light',
      common: {
        black: '#000000',
        white: '#ffffff',
      },
      primary: {
        main: '#10b981',
        light: '#34d399',
        dark: '#059669',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#6ee7b7',
        light: '#9af2ca',
        dark: '#3eb889',
        contrastText: '#0f172a',
      },
      // Removed default warning changes, since we now change primary dynamically
      warning: {
        main: "#ed6c02",
        light: "#ff9800",
        dark: "#e65100",
        contrastText: "#fff"
      },
      info: {
        main: "#0288d1",
        light: "#03a9f4",
        dark: "#01579b",
        contrastText: "#fff"
      },
      success: {
        main: "#2e7d32",
        light: "#4caf50",
        dark: "#1b5e20",
        contrastText: "#fff"
      },
      grey: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#0c1425',
        900: '#0f172a',
        A100: '#f1f5f9',
        A200: '#e2e8f0',
        A400: '#94a3b8',
        A700: '#334155',
      },
      text: {
        primary: '#0f172a',
        secondary: '#334155',
        disabled: '#64748b',
      },
      background: {
        paper: '#ffffff',
        default: '#f8fafc',
      },
    },
  },
  dark: {
    palette: {
      mode: 'dark',
      common: {
        black: '#000000',
        white: '#ffffff',
      },
      primary: {
        main: '#10b981',
        light: '#34d399',
        dark: '#059669',
        contrastText: '#0f172a',
      },
      secondary: {
        main: '#6ee7b7',
        light: '#9af2ca',
        dark: '#3eb889',
        contrastText: '#ffffff',
      },
      warning: {
        main: "#ffa726",
        light: "#ffb74d",
        dark: "#f57c00",
        contrastText: "rgba(0,0,0,0.87)"
      },
      info: {
        main: "#29b6f6",
        light: "#4fc3f7",
        dark: "#0288d1",
        contrastText: "rgba(0,0,0,0.87)"
      },
      success: {
        main: "#66bb6a",
        light: "#81c784",
        dark: "#388e3c",
        contrastText: "rgba(0,0,0,0.87)"
      },
      grey: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#0c1425',
        900: '#0f172a',
        A100: '#f1f5f9',
        A200: '#e2e8f0',
        A400: '#94a3b8',
        A700: '#334155',
      },
      text: {
        primary: '#ffffff',
        secondary: '#cbd5e1',
        disabled: '#64748b',
      },
      background: {
        paper: '#0c1425',
        default: '#0f172a',
      },
    },
  },
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  setPrimaryColor: () => {},
});

export const useMode = () => {
  const storedMode = localStorage.getItem("mode") || "dark";
  const [mode, setMode] = useState(storedMode);

  const defaultPrimary = mode === 'light' ? '#10b981' : '#10b981';
  const [primaryMain, setPrimaryMain] = useState(localStorage.getItem("primaryMain") || defaultPrimary);

  const theme = useMemo(() => createTheme({
    ...themes[mode],
    palette: {
      ...themes[mode].palette,
      primary: {
        ...themes[mode].palette.primary,
        main: primaryMain,
      },
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
    },
  }), [mode, primaryMain]);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem("primaryMain", primaryMain);
  }, [primaryMain]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const setPrimaryColor = (color) => {
    setPrimaryMain(color);
  };

  return [theme, { toggleColorMode, setPrimaryColor }];
};
