import Icon from "@lib/components/icon/Icon"
import IconButton from "@lib/components/iconButton/IconButton"
import useTheme from "@lib/hooks/useTheme"
import { useToggleTheme } from "../../../providers/ThemeContext/ThemeContext"

const ThemeToggleIcon = () => {
  const toggleTheme = useToggleTheme()
  const theme = useTheme()
  const darkMode = theme?.palette.darkMode

  return (
    <IconButton onClick={toggleTheme || undefined}>
      <Icon name={darkMode ? "sun" : "moon"} />
    </IconButton>
  )
}

export default ThemeToggleIcon
