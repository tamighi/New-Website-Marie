import React from "react"
import { Appbar, Divider, Drawer, IconButton } from "../../components"
import { MenuIcon } from "../../components"
import { ThemeToggleIcon } from "./ThemeToggleIcon"

export const TestAppbar = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Appbar>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        Hello World
        <Divider />
      </Drawer>
      <div style={{ flexGrow: 1 }} />
      <ThemeToggleIcon />
    </Appbar>
  )
}
