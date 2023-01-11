import { FrontApp } from "./FrontApp"
import { ThemeProvider } from "./hooks/ThemeContext"

import "./styles/FrontRoot.css"

export const FrontRoot = () => {
  return (
    <ThemeProvider>
      <FrontApp />
    </ThemeProvider>
  )
}
