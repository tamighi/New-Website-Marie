import React from "react";

import { createTheme, ThemeProvider } from "lib";

const ToggleThemeContext = React.createContext<(() => void) | null>(null);

export const useToggleTheme = () => {
  return React.useContext(ToggleThemeContext);
};

export const MyThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("dark") === "light" ? false : true
  );

  const toggleTheme = () => {
    localStorage.setItem("dark", darkMode ? "light" : "dark");
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      darkMode: darkMode,
      light: {
        primary: "rgba(248,195,115,0.8)",
        secondary: "#a51e1e",
        surface: "rgba(229,103,20,0.8)",
        text: "black",
      },
      dark: {
        primary: "rgba(0, 0, 32, 0.9)",
        secondary: "#16368d",
        surface: "rgba(0, 0, 96, 0.9)",
        text: "white",
      },
    },
    transition: "color 0.6s, background 0.6s",
  });

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
};
