import React from "react"
import IconButton from "./IconButton"

import "../../styles/Drawer.css"
import { useColors } from "../../hooks/useColors"
import { useClickOutside } from "../../hooks/useClickOutside"

const Drawer = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false)
  const colors = useColors()
  const onClick = () => {
    setOpen(!open)
  }

  const ref = useClickOutside(() => setOpen(false))

  return (
    <>
      <IconButton name="menu" onClick={onClick} />
      <div
        className={`Drawer${open ? "" : " Hidden"}`}
        style={{ backgroundColor: colors.primaryColor }}
        ref={ref}
      >
        {children}
      </div>
    </>
  )
}

export default Drawer
