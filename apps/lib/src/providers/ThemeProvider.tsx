import React from "react"

import { ThemeContext } from "../contexts"
import { Theme } from "../types"

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
