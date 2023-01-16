import React from "react"

import Drawer from "../../../../lib/components/drawer/Drawer"
import IconButton from "../../../../lib/components/iconButton/IconButton"
import Divider from "../../../../lib/components/divider/Divider"

import { useNavigate } from "react-router-dom"
import useColors from "../../../hooks/useColors"

import "./AppbarDrawer.css"

interface AppbarDrawerProps {
  navItems: { name: string; to: string }[]
}

export const AppbarDrawer = ({ navItems }: AppbarDrawerProps) => {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()
  const colors = useColors()

  const onClick = (to: string) => {
    setOpen(false)
    navigate(to)
  }

  return (
    <div className="MobileAppbar">
      <IconButton name="menu" onClick={() => setOpen(!open)} />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        style={{ backgroundColor: colors.secondaryColor }}
      >
        <ul className="DrawerLinkList">
          <li>
            Menu
            <Divider />
          </li>
          {navItems.map((item, id) => (
            <li key={id}>
              <button className="DrawerLink" onClick={() => onClick(item.to)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  )
}
