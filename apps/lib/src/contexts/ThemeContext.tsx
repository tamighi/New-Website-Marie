import React from "react"

import Theme from "@lib/types/Theme"

const ThemeContext = React.createContext<Theme | null>(null)

export default ThemeContext
