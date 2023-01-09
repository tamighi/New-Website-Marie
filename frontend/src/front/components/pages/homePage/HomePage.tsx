import { useThemeColors, useToggleTheme } from "../../../hooks/ThemeContext"

export const HomePage = () => {
  const toggleTheme = useToggleTheme()

  if (!toggleTheme) {
    return null
  }
  return <button onClick={() => toggleTheme()}>Toggle</button>
}
