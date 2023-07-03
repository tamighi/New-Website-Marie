import { Theme } from "../providers";

export const lightTheme: Theme = {
  palette: {
    mode: "light",
    colors: {
      primary: "#45dced",
      secondary: "#03cac6",
      surface: "#ffffff",
      text: "black",
      disabled: "grey",
      hover: "grey",
    },
  },
  transition: undefined,
} as const;

export const darkTheme: Theme = {
  palette: {
    mode: "light",
    colors: {
      primary: "#393053",
      secondary: "#144272",
      surface: "#202121",
      text: "white",
      disabled: "grey",
      hover: "grey",
    },
  },
  transition: undefined,
} as const;
