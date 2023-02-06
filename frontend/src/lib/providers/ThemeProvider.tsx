import React from "react"

import ThemeContext from "@lib/contexts/ThemeContext"

import Theme from "@lib/types/Theme"

const ThemeProvider = ({
  children,
  theme
}: {
  children: React.ReactNode
  theme: Theme
}) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
