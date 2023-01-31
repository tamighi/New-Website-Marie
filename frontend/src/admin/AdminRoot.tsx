import { ThemeProvider } from "@lib/hooks/contexts/ThemeContext"
import { AdminApp } from "./AdminApp"

export const AdminRoot = () => {
  return (
    <ThemeProvider>
      <AdminApp />
    </ThemeProvider>
  )
}
