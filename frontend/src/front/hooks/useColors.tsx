import "../styles/colors.css"
import { useDarkTheme } from "./ThemeContext"

export const useColors = () => {
  const darkTheme = useDarkTheme()

  return {
    primaryColor: darkTheme ? "var(--dark-color)" : "var(--light-color)",
    secondaryColor: darkTheme
      ? "var(--dark-secondary-color)"
      : "var(--light-secondary-color)",
  }
}
