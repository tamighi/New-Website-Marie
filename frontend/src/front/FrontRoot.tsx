import { FrontApp } from "./FrontApp"
import { ThemeProvider } from "./hooks/ThemeContext"

export const FrontRoot = () => {
  return (
    <ThemeProvider>
      <FrontApp />
    </ThemeProvider>
  )
}
