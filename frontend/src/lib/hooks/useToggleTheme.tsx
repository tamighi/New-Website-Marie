import React from "react"

import ToggleThemeContext from "@lib/contexts/ToggleThemeContext"

const useToggleTheme = () => {
  return React.useContext(ToggleThemeContext)
}

export default useToggleTheme
