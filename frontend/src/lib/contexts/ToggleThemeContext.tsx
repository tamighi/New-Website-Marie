import React from "react"

const ToggleThemeContext = React.createContext<(() => void) | null>(null)

export default ToggleThemeContext
