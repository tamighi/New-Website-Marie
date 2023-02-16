import React from "react"

export interface Color {
  light: string
  dark: string
}

export interface Palette {
  darkMode: boolean
  primary: Color
  secondary: Color
  background: Color
  text: Color
}

export interface Theme {
  palette: Palette
}

const ThemeContext = React.createContext<Theme | null>(null)

export default ThemeContext
