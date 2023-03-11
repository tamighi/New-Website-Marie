import { Theme } from "../providers";

const baseTheme: Theme = {
  palette: {
    darkMode: false,
    light: {
      primary: "#6200ee",
      secondary: "#03cac6",
      surface: "#ffffff",
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
