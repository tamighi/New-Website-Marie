import { Icon, IconButton } from "@lib/components"
import { useTheme } from "@lib/hooks"

import { useToggleTheme } from "../../../providers/ThemeContext/ThemeContext"

export const ThemeToggleIcon = () => {
  const toggleTheme = useToggleTheme()
  const theme = useTheme()
  const darkMode = theme?.palette.darkMode

  return (
    <IconButton onClick={toggleTheme || undefined}>
      <Icon name={darkMode ? "sun" : "moon"} />
    </IconButton>
  )
}
