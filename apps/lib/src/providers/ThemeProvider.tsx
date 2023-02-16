import React from "react"

import { Theme, ThemeContext } from "../contexts"

const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode
  theme: Theme
}) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
