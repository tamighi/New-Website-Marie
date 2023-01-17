import IconButton from "../../../../lib/components/iconButton/IconButton"
import {
  useDarkTheme,
  useToggleTheme,
} from "../../../../lib/hooks/contexts/ThemeContext"

export const ThemeToggleIcon = () => {
  const toggleTheme = useToggleTheme()
  const darkTheme = useDarkTheme()

  return (
    <IconButton
      name={darkTheme ? "sun" : "moon"}
      onClick={toggleTheme || undefined}
    />
  )
}
