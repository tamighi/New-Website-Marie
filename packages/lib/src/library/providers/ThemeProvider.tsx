import React from "react";

import { baseTheme } from "../constants";

export interface Colors {
  primary: string;
  secondary: string;
  surface: string;
  text: string;
}

export type Palette <P extends string> = {
  [K in P]: Colors
} & { mode: P }

export interface Theme <P extends string = "dark" | "light"> {
  palette: Palette<P>;
  transition?: string;
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
