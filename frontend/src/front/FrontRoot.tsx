import { ThemeProvider } from "@lib/hooks/contexts/ThemeContext"
import { FrontApp } from "./FrontApp"

export const FrontRoot = () => {
  return (
    <ThemeProvider>
      <FrontApp />
    </ThemeProvider>
  )
}
