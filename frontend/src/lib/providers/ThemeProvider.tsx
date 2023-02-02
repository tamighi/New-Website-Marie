import React from "react"

import ThemeContext from "@lib/contexts/ThemeContext"
import ToggleThemeContext from "@lib/contexts/ToggleThemeContext"

import Theme from "@lib/types/Theme"

const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode
  theme: Theme
}) => {
  const toggleTheme = () => {
    localStorage.setItem("dark", theme ? "light" : "dark")
    theme = {
      ...theme,
      palette: { ...theme.palette, darkMode: !theme.palette?.darkMode },
    }
  }
  return (
    <ThemeContext.Provider value={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
