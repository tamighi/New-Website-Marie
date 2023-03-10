import React from "react";
import { ThemeProvider } from "library";
import { createTheme } from "library";

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
        primary: "#ee8c00",
        secondary: "#4bba3b",
        surface: "#ff7f50",
        text: "black",
      },
      dark: {
        primary: "#920094",
        secondary: "#a30000",
        surface: "#000080",
        text: "white",
      },
    },
    transition: "background .6s ease, color .6s ease",
  });

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
};
