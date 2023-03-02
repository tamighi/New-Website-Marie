import React from "react";

import { baseTheme } from "../constants";

export interface Colors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export interface Palette {
  darkMode: boolean;
  dark: Colors;
  light: Colors;
}

export interface Theme {
  palette: Palette;
  transition: string;
}

const ThemeContext = React.createContext<Theme | null>(null);

export const useTheme = () => {
  return React.useContext(ThemeContext) || baseTheme;
};

const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
