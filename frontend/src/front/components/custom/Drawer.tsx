import React from "react"
import { useColors } from "../../hooks/useColors"
import { useClickOutside } from "../../hooks/useClickOutside"

import "../../styles/Drawer.css"

interface DrawerProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

const Drawer = ({ children, open, onClose }: DrawerProps) => {
  const colors = useColors()

  const ref = useClickOutside(() => onClose())

  return (
    <div
      className={`Drawer${open ? "" : " Hidden"}`}
      style={{ backgroundColor: colors.primaryColor }}
      ref={ref}
    >
      {children}
    </div>
  )
}

export default Drawer
