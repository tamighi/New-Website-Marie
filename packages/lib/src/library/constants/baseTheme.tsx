import { Theme } from "../providers";

const baseTheme: Theme = {
  palette: {
    darkMode: false,
    light: {
      primary: "#bcead5",
      secondary: "ffcac8",
      surface: "#d4d9d6",
      text: "black",
    },
    dark: {
      primary: "#393053",
      secondary: "#144272",
      surface: "#202121",
      text: "white",
    },
  },
  transition: undefined,
} as const;

export default baseTheme;
