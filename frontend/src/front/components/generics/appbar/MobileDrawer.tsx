import React from "react"

import Drawer from "../../custom/Drawer"
import IconButton from "../../custom/IconButton"

import { Link } from "react-router-dom"

import "../../../styles/Appbar.css"

interface MobileDrawerProps {
  navItems: { name: string; to: string }[]
}

export const MobileDrawer = ({ navItems }: MobileDrawerProps) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <IconButton name="menu" onClick={() => setOpen(!open)} />
      <div className="MobileAppbar">
        <Drawer open={open} onClose={() => setOpen(false)}>
          <ul className="DrawerLinkList">
            {navItems.map((item, id) => (
              <li key={id}>
                <Link
                  className="DrawerLink"
                  to={item.to}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Drawer>
      </div>
    </>
  )
}
