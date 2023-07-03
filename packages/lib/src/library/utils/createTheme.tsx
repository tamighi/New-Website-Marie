import { baseTheme } from "../constants";
import { Colors, Palette, Theme } from "../providers";

type DeepPartial<T> = T extends object
  ? { [Key in keyof T]?: DeepPartial<T[Key]> }
  : T | undefined;

const createColor = (userColor: DeepPartial<Colors>, baseColor: Colors) => {
  return {
    ...baseColor,
    ...userColor,
  };
};

const createPalette = (
  userPalette: DeepPartial<Palette> | undefined
) => {
  const palette = baseTheme.palette;

  if (userPalette?.mode !== undefined) {
    palette.mode = userPalette.mode;
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
