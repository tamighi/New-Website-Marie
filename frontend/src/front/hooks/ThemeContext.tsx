import React from "react"

const ThemeContext = React.createContext<boolean | null>(null)
const ToggleThemeContext = React.createContext<(() => void) | null>(null)

export const useDarkTheme = () => {
  return React.useContext(ThemeContext)
}

export const useToggleTheme = () => {
  return React.useContext(ToggleThemeContext)
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = React.useState(
    localStorage.getItem("dark") === "light" ? false : true
  )
  const toggleTheme = () => {
    localStorage.setItem("dark", darkTheme ? "light" : "dark")
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
