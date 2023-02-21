import React from "react";

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

export default ThemeContext;
