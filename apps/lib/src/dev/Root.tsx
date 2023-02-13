import { App } from "./App"
import { MyThemeProvider } from "./providers/MyThemeProvider"

export const Root = () => {
  return (
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  )
}
