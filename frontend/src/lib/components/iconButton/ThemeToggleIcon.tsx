import { useDarkTheme, useToggleTheme } from "../../hooks/contexts/ThemeContext"
import Icon from "../icon/Icon"
import IconButton from "./IconButton"

const ThemeToggleIcon = () => {
  const toggleTheme = useToggleTheme()
  const darkTheme = useDarkTheme()

  return (
    <IconButton onClick={toggleTheme || undefined}>
      <Icon name={darkTheme ? "sun" : "moon"} />
    </IconButton>
  )
}

export default ThemeToggleIcon
