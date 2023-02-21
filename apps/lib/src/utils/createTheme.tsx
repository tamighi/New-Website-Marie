import { baseTheme } from "../constants";
import { Colors, Palette, Theme } from "../contexts";

type DeepPartial<T> = T extends object
  ? { [Key in keyof T]?: DeepPartial<T[Key]> }
  : T | undefined;

const createColor = (userColor: DeepPartial<Colors>, baseColor: Colors) => {
  return {
    primary: userColor.primary ? userColor.primary : baseColor.primary,
    secondary: userColor.secondary ? userColor.secondary : baseColor.secondary,
    background: userColor.background
      ? userColor.background
      : baseColor.background,
    text: userColor.text ? userColor.text : baseColor.text,
  };
};

const createPalette = (userPalette: DeepPartial<Palette> | undefined) => {
  const palette = baseTheme.palette;
  if (userPalette?.darkMode !== undefined) {
    palette.darkMode = userPalette.darkMode;
  }
  if (userPalette?.light) {
    palette.light = createColor(userPalette.light, palette.light);
  }
  if (userPalette?.dark) {
    palette.dark = createColor(userPalette.dark, palette.dark);
  }
  return palette;
};

export const createTheme = (userTheme: DeepPartial<Theme>): Theme => {
  const theme = {
    palette: createPalette(userTheme.palette),
    transition: userTheme.transition || baseTheme.transition,
  };
  return theme;
};
