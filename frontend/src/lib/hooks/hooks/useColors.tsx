import { useDarkTheme } from "../contexts/ThemeContext"
import React from "react"

interface Colors {
  lightPrimaryColor: string
  darkPrimaryColor: string
  lightSecondaryColor: string
  darkSecondaryColor: string
  lightTextColor: string
  darkTextColor: string
}

const setDocumentProperties = (darkTheme: boolean | null, colors: Colors) => {
  document.documentElement.style.setProperty(
    "--primary-color",
    darkTheme ? colors.darkPrimaryColor : colors.lightPrimaryColor
  )
  document.documentElement.style.setProperty(
    "--secondary-color",
    darkTheme ? colors.darkSecondaryColor : colors.lightSecondaryColor
  )
  document.documentElement.style.setProperty(
    "--text-color",
    darkTheme ? colors.darkTextColor : colors.lightTextColor
  )
}

const useColors = (colors: Colors) => {
  const darkTheme = useDarkTheme()

  setDocumentProperties(darkTheme, colors)

  React.useEffect(() => {
    setDocumentProperties(darkTheme, colors)
  }, [darkTheme, colors])
}

export default useColors
