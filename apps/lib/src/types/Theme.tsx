export interface Palette {
  light: string
  dark: string
}

export interface Theme {
  palette: {
    darkMode: boolean
    primary: Palette
    secondary: Palette
    text: Palette
  }
}
