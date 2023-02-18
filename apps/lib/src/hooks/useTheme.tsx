import React from "react"

import { baseTheme } from "../constants"
import { ThemeContext } from "../contexts"

const useTheme = () => {
  return React.useContext(ThemeContext) || baseTheme
}

export default useTheme
