import { useTheme, useToggleTheme } from "../../hooks/contexts/ThemeContext"
import Icon from "../icon/Icon"
import IconButton from "./IconButton"

const ThemeToggleIcon = () => {
  const toggleTheme = useToggleTheme()
  const theme = useTheme()
  const darkMode = theme.palette?.darkMode

  return (
    <IconButton onClick={toggleTheme || undefined}>
      <Icon name={darkMode ? "sun" : "moon"} />
    </IconButton>
  )
}

export default ThemeToggleIcon
