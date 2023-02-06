import Icon from "@lib/components/icon/Icon"
import IconButton from "@lib/components/iconButton/IconButton"
import useTheme from "@lib/hooks/useTheme"

const ThemeToggleIcon = () => {
  const toggleTheme = undefined
  const theme = useTheme()
  const darkMode = theme?.palette.darkMode

  return (
    <IconButton onClick={toggleTheme || undefined}>
      <Icon name={darkMode ? "sun" : "moon"} />
    </IconButton>
  )
}

export default ThemeToggleIcon
