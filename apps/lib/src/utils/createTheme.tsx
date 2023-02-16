import { baseTheme } from "../constants"
import { Color, Palette, Theme } from "../contexts"

type DeepPartial<T> = T extends object
  ? { [Key in keyof T]?: DeepPartial<T[Key]> }
  : T | undefined

const createColor = (userColor: DeepPartial<Color>, baseColor: Color) => {
  return {
    light: userColor.light ? userColor.light : baseColor.light,
    dark: userColor.dark ? userColor.dark : baseColor.dark,
  }
}

const createPalette = (userPalette: DeepPartial<Palette> | undefined) => {
  const palette = baseTheme.palette
  if (userPalette?.darkMode !== undefined) {
    palette.darkMode = userPalette.darkMode
  }
  if (userPalette?.primary) {
    palette.primary = createColor(userPalette.primary, palette.primary)
  }
  if (userPalette?.secondary) {
    palette.secondary = createColor(userPalette.secondary, palette.secondary)
  }
  if (userPalette?.background) {
    palette.background = createColor(userPalette.background, palette.background)
  }
  if (userPalette?.text) {
    palette.text = createColor(userPalette.text, palette.text)
  }
  return palette
}

export const createTheme = (userTheme: DeepPartial<Theme>): Theme => {
  const theme = {
    palette: createPalette(userTheme.palette),
  }
  return theme
}
