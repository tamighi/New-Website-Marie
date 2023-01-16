import "../styles/colors.css"
import { useDarkTheme } from "./ThemeContext"

const useColors = () => {
  const darkTheme = useDarkTheme()

  return darkTheme
    ? {
        primaryColor: "var(--dark-color)",
        secondaryColor: "var(--dark-secondary-color)",
        textColor: "var(--dark-text-color)",
      }
    : {
        primaryColor: "var(--light-color)",
        secondaryColor: "var(--light-secondary-color)",
        textColor: "var(--light-text-color)",
      }
}

export default useColors

