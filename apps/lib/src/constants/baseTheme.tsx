import { Theme } from "../contexts/ThemeContext"

const baseTheme: Theme = {
  palette: {
    darkMode: false,
    primary: {
      light: "#bcead5",
      dark: "#393053",
    },
    secondary: {
      light: "ffcac8",
      dark: "#144272",
    },
    text: {
      light: "black",
      dark: "white",
    },
    background: {
      light: "#d4d9d6",
      dark: "#202121",
    },
  },
  transition: "none"
} as const

export default baseTheme
