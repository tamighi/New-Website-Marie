import { useDarkTheme } from "../contexts/ThemeContext"
import React from "react"

const setDocumentProperties = (darkTheme: boolean | null) => {
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
}

const useColors = () => {
  const darkTheme = useDarkTheme()

  setDocumentProperties(darkTheme)

  React.useEffect(() => {
    setDocumentProperties(darkTheme)
  }, [darkTheme])
}

export default useColors
