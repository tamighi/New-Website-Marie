interface Palette {
  light: string
  dark: string
}

interface Theme {
  palette: {
    darkMode: boolean
    primary: Palette
    secondary: Palette
    text: Palette
  }
}

export default Theme
