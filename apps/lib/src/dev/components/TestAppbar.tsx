import React from "react"
import { Link } from "react-router-dom"
import {
  Appbar,
  Divider,
  Drawer,
  HomeIcon,
  IconButton,
  MenuIcon,
  TableChartIcon,
} from "../../components"
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
      <Link to="/dataGrid">
        <TableChartIcon />
      </Link>
      <Link to="/">
        <HomeIcon />
      </Link>
      <ThemeToggleIcon />
    </Appbar>
  )
}
