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
        primary: "rgba(248,195,115, 0.7)",
        secondary: "#a51e1e",
        surface: "rgba(255, 127, 80, 0.7)",
        text: "black",
      },
      dark: {
        primary: "#920094",
        secondary: "#16368d",
        surface: "rgba(0, 0, 128, 0.5)",
        text: "white",
      },
    },
    transition: "all 0.6s ease",
  });

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
};
