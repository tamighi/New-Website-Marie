import "../styles/colors.css"
import { useDarkTheme } from "./ThemeContext"

export const useColors = () => {
  const darkTheme = useDarkTheme()

  return darkTheme
    ? {
        primaryColor: "var(--dark-color)",
        secondaryColor: "var(--light-secondary-color)",
        textColor: "var(--dark-secondary-color)",
      }
    : {
        primaryColor: "var(--light-color)",
        secondaryColor: "var(--light-secondary-color)",
        textColor: "var(--light-secondary-color)",
      }
}
