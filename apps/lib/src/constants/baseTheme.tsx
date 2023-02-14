import { Theme } from "../contexts/ThemeContext"

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
} as const

export default baseTheme
