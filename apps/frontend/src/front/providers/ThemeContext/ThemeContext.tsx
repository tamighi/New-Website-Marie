import React from "react"

import LibThemeProvider from "@lib/providers/ThemeProvider"

import Theme from "@lib/types/Theme"

const ToggleThemeContext = React.createContext<(() => void) | null>(null)

export const useToggleTheme = () => {
  return React.useContext(ToggleThemeContext)
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("dark") === "light" ? false : true
  )

  const toggleTheme = () => {
    localStorage.setItem("dark", darkMode ? "light" : "dark")
    setDarkMode(!darkMode)
  }

  const theme: Theme = {
    palette: {
      darkMode: darkMode,
      primary: {
        light: "rgba(255, 127, 80, 0.7)",
        dark: "rgba(0, 0, 128, 0.5)",
      },
      secondary: {
        light: "#a51e1e",
        dark: "#16368d",
      },
      text: {
        light: "black",
        dark: "white",
      },
    },
  }

  return (
    <LibThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </LibThemeProvider>
  )
}
