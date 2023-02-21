import { Theme } from "../contexts/ThemeContext";

const baseTheme: Theme = {
  palette: {
    darkMode: false,
    light: {
      primary: "#bcead5",
      secondary: "ffcac8",
      background: "#d4d9d6",
      text: "black",
    },
    dark: {
      primary: "#393053",
      secondary: "#144272",
      background: "#202121",
      text: "white",
    },
  },
  transition: "",
} as const;

export default baseTheme;
