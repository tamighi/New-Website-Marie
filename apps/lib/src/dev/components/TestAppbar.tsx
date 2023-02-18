import React from "react"
import { useNavigate } from "react-router-dom"
import {
  Appbar,
  Divider,
  Drawer,
  HomeIcon,
  IconButton,
  MenuIcon,
  Navbar,
  TableChartIcon,
} from "../../components"
import { ThemeToggleIcon } from "./ThemeToggleIcon"

export const TestAppbar = () => {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  return (
    <Appbar>
      <Navbar>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          Hello World
          <Divider />
        </Drawer>
        <ThemeToggleIcon />
        <div style={{ flexGrow: 1 }} />
        <IconButton onClick={() => navigate("/")}>
          <HomeIcon />
        </IconButton>
        <IconButton onClick={() => navigate("/dataGrid")}>
          <TableChartIcon />
        </IconButton>
      </Navbar>
    </Appbar>
  )
}
