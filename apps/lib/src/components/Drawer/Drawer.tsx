import React from "react"

import { useClickOutside, useStyles } from "../../hooks"
import { DefaultProps } from ".."

import "./Drawer.css"

export interface DrawerProps extends DefaultProps {
  open: boolean
  onClose: () => void
}

const Drawer = (props: DrawerProps) => {
  const { style, children, className, open, onClose } = props

  const classNames = "Drawer " + (className || "")

  const styles = {
    ...useStyles("background"),
    ...style,
  }

  const ref = useClickOutside(onClose)
  const [visible, setVisible] = React.useState(open)

  React.useEffect(() => {
    if (open) {
      setVisible(open)
    }
    const timer = setTimeout(() => {
      if (!open) {
        setVisible(open)
      }
    }, 225)
    return () => clearTimeout(timer)
  }, [open])

  return (
    <div className={`DrawerContainer${visible ? "" : " HiddenContainer"}`}>
      <div className={`Background${open ? "" : " HiddenBackground"}`} />
      <div
        className={`${classNames}${open ? "" : " HiddenDrawer"}`}
        style={styles}
        ref={ref}
      >
        {children}
      </div>
    </div>
  )
}

export default Drawer
