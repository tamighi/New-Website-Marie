import React from "react"
import LibDrawer from "../../../lib/components/drawer/Drawer"
import useColors from "../../../lib/hooks/hooks/useColors"

interface DrawerProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
  style?: React.CSSProperties
}

const Drawer = ({ children, ...props }: DrawerProps) => {
  const colors = useColors()
  return (
    <LibDrawer {...props} style={{ backgroundColor: colors.secondaryColor }}>
      {children}
    </LibDrawer>
  )
}

export default Drawer
