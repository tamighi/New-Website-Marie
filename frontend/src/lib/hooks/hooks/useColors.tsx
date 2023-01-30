import { useDarkTheme } from "../contexts/ThemeContext"
import "../../styles/colors.css"
import React from "react"

const useColors = () => {
  const darkTheme = useDarkTheme()

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      darkTheme ? "var(--dark-primary-color)" : "var(--light-primary-color)"
    )
    document.documentElement.style.setProperty(
      "--secondary-color",
      darkTheme ? "var(--dark-secondary-color)" : "var(--light-secondary-color)"
    )
    document.documentElement.style.setProperty(
      "--text-color",
      darkTheme ? "var(--dark-text-color)" : "var(--light-text-color)"
    )
  }, [darkTheme])
}

export default useColors
