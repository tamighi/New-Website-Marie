import React from "react"

import { ThemeContext } from "../contexts"

const useTheme = () => {
  return React.useContext(ThemeContext)
}

export default useTheme
