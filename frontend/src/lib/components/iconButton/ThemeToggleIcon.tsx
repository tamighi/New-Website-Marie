import Icon from "../icon/Icon"
import IconButton from "./IconButton"

import useTheme from "@lib/hooks/useTheme"
import useToggleTheme from "@lib/hooks/useToggleTheme"

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
