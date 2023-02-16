import { Appbar } from "../../components"
import { MenuIcon } from "../../components"
import { ThemeToggleIcon } from "./ThemeToggleIcon"

export const TestAppbar = () => {
  return (
    <Appbar>
      <MenuIcon />
      <div style={{ flexGrow: 1 }} />
      <ThemeToggleIcon />
    </Appbar>
  )
}
