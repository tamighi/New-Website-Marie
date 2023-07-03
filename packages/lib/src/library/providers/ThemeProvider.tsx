import React from "react";

import { lightTheme } from "../constants";

export type Color = "primary" | "secondary" | "text" | "surface";

export type Action = "disabled" | "hover";

export type Colors = {
  [K in Color]: string;
} & {
  [K in Action]: string;
};

export interface Palette {
  mode: "dark" | "light";
  colors: Colors;
}

export interface Theme {
  palette: Palette;
  transition?: string;
}

const ThemeContext = React.createContext<Theme | null>(null);

export const useTheme = () => {
  return React.useContext(ThemeContext) || lightTheme;
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
