import React from "react"

import ThemeContext from "@lib/contexts/ThemeContext"

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

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

const baseTheme: Theme = {
  palette: {
    darkMode: false,
    primary: {
      light: "blue",
      dark: "grey",
    },
    secondary: {
      light: "white",
      dark: "lightGrey",
    },
    text: {
      light: "black",
      dark: "white",
    },
  },
}

export const createTheme = (createdTheme: DeepPartial<Theme>) => {
  if (createdTheme.palette?.primary) {
    Object.assign(baseTheme.palette.primary, createdTheme.palette.primary)
  }
  if (createdTheme.palette?.secondary) {
    Object.assign(baseTheme.palette.secondary, createdTheme.palette.secondary)
  }
  if (createdTheme.palette?.text) {
    Object.assign(baseTheme.palette.text, createdTheme.palette.text)
  }
}


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<Theme>({
    ...baseTheme,
    palette: {
      ...baseTheme.palette,
      darkMode: localStorage.getItem("dark") === "light" ? false : true,
    },
  })

  const toggleTheme = () => {
    localStorage.setItem("dark", theme ? "light" : "dark")
    setTheme({
      ...theme,
      palette: { ...theme.palette, darkMode: !theme.palette?.darkMode },
    })
  }
  return (
    <ThemeContext.Provider value={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
