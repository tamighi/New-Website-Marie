import { useThemeColors, useToggleTheme } from "../../hooks/ThemeContext"

import "../../styles/Appbar.css"

export const Appbar = () => {
  const toggleTheme = useToggleTheme()
  const colors = useThemeColors()

  if (!toggleTheme) {
    return null
  }
  return (
    <div className="Appbar" style={{ backgroundColor: colors?.primaryColor }}>
      <button
        onClick={() => toggleTheme()}
        style={{ color: colors?.primaryColor }}
      >
        Toggle
      </button>
    </div>
  )
}
