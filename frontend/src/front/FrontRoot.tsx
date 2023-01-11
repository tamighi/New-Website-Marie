import { FrontPage } from "./FrontPage"
import { ThemeProvider } from "./hooks/ThemeContext"

import "./styles/FrontRoot.css"

export const FrontRoot = () => {
  return (
    <ThemeProvider>
      <FrontPage />
    </ThemeProvider>
  )
}
