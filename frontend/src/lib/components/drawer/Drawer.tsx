import useClickOutside from "../../hooks/hooks/useClickOutside"
import useColors from "../../hooks/hooks/useColors"
import { PropType } from "../props"

import "./Drawer.css"

interface DrawerProps extends PropType {
  open: boolean
  onClose: () => void
}

const Drawer = (props: DrawerProps) => {
  const { style, children, className, open, onClose } = props

  const classNames = "Drawer " + (className || "")
  const ref = useClickOutside(onClose)
  const colors = useColors()

  return (
    <div
      className={`${classNames}${open ? "" : " Hidden"}`}
      style={{ ...style, ...{ backgroundColor: colors.secondaryColor } }}
      ref={ref}
    >
      {children}
    </div>
  )
}

export default Drawer
