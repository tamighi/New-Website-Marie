import { FrontApp } from "./FrontApp"
import { ThemeProvider } from "./providers/ThemeContext/ThemeContext"

export const FrontRoot = () => {
  return (
    <ThemeProvider>
      <FrontApp />
    </ThemeProvider>
  )
}
