import React from "react"

export interface Palette {
  light: string
  dark: string
}

export interface Theme {
  palette: {
    darkMode: boolean
    primary: Palette
    secondary: Palette
    text: Palette
  }
}

const ThemeContext = React.createContext<Theme | null>(null)

export default ThemeContext
