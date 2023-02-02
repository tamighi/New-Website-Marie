import React from "react"
import useTheme from "./useTheme"

interface Palette {
  light: string
  dark: string
}

interface Theme {
  palette: {
    darkMode: boolean
    primary: Palette
    secondary: Palette
    text: Palette
  }
}

const baseTheme: Theme = {
  palette: {
    darkMode: false,
    primary: {
      light: "blue",
      dark: "grey",
    },
    secondary: {
      light: "white",
      dark: "lightGrey",
    },
    text: {
      light: "black",
      dark: "white",
    },
  },
}

const useStyles = () => {
  const providedTheme = useTheme()

  const theme: Theme = providedTheme || baseTheme

  const styles: React.CSSProperties = {
    backgroundColor: theme.palette.primary.light
  }

  return styles
}

export default useStyles
