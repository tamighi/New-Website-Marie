import { FrontApp } from "./FrontApp"
import { MyThemeProvider } from "./providers/ThemeContext/ThemeContext"

export const FrontRoot = () => {
  return (
    <MyThemeProvider>
      <FrontApp />
    </MyThemeProvider>
  )
}
