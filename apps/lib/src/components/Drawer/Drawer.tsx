import React from "react"

import { useClickOutside } from "@hooks"
import { Props } from "@types"

import "./Drawer.css"

interface DrawerProps extends Props {
  open: boolean
  onClose: () => void
}

const Drawer = (props: DrawerProps) => {
  const { style, children, className, open, onClose } = props

  const classNames = "Drawer " + (className || "")
  const ref = useClickOutside(onClose)

  const [visible, setVisible] = React.useState(open)

  React.useEffect(() => {
    setVisible(open)
  }, [open])

  return (
    <div className={`Container${open ? "" : " Hidden"}`}>
      <div className={`Background${visible ? "" : " HiddenBackground"}`}/>
      <div
        className={`${classNames}${visible ? "" : " HiddenDrawer"}`}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    </div>
  )
}

export default Drawer
