import React from "react"
import { useClickOutside } from "../../../front/hooks/useClickOutside"

import "./Drawer.css"

interface DrawerProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
  style?: React.CSSProperties
}

const Drawer = ({ children, open, onClose, style = {} }: DrawerProps) => {
  const ref = useClickOutside(() => onClose())

  return (
    <div className={`Drawer${open ? "" : " Hidden"}`} style={style} ref={ref}>
      {children}
    </div>
  )
}

export default Drawer
