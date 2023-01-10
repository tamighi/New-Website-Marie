import IconButton from "../../custom/IconButton"

import { useDarkTheme, useToggleTheme } from "../../../hooks/ThemeContext"

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
