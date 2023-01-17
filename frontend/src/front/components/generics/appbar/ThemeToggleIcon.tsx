import Icon from "../../../../lib/components/icon/Icon"
import IconButton from "../../../../lib/components/iconButton/IconButton"
import {
  useDarkTheme,
  useToggleTheme,
} from "../../../../lib/hooks/contexts/ThemeContext"

export const ThemeToggleIcon = () => {
  const toggleTheme = useToggleTheme()
  const darkTheme = useDarkTheme()

  return (
    <IconButton onClick={toggleTheme || undefined}>
      <Icon name={darkTheme ? "moon" : "sun"} />
    </IconButton>
  )
}
