import React from "react"

import ThemeContext from "@lib/contexts/ThemeContext"

import Theme from "@lib/types/Theme"
import baseTheme from "@lib/constants/baseTheme"

const ThemeProvider = ({
  children,
  theme = baseTheme,
}: {
  children: React.ReactNode
  theme?: Theme
}) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
