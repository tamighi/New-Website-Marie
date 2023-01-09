import React from "react"

import ThemeColors from "../types/ThemeColor"

import "../styles/colors.css"

const darkColors = {
  primaryColor: "var(--dark-color)",
}

const lightColors = {
  primaryColor: "var(--light-color)",
}

const ThemeContext = React.createContext<ThemeColors | null>(null)
const ToggleThemeContext = React.createContext<(() => void) | null>(null)

export const useThemeColors = () => {
  return React.useContext(ThemeContext)
}

export const useToggleTheme = () => {
  return React.useContext(ToggleThemeContext)
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = React.useState(
    localStorage.getItem("dark") === "light" ? false : true
  )
  const [themeColors, setThemeColors] = React.useState(darkColors)

  const toggleTheme = () => {
    localStorage.setItem("dark", darkTheme ? "light" : "dark")
    setDarkTheme(!darkTheme)
    setThemeColors(darkTheme ? lightColors : darkColors)
  }


  return (
    <ThemeContext.Provider value={themeColors}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
