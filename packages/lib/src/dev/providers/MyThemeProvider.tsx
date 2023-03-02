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
    palette: { darkMode: darkMode },
    transition: "all .6s ease",
  });

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
};
