import { AdminApp } from "./AdminApp"
import { ThemeProvider } from "./hooks/ThemeContext"

export const AdminRoot = () => {
  return (
    <ThemeProvider>
      <AdminApp />
    </ThemeProvider>
  )
}
