import React from "react"

import IconButton from "../../../../lib/components/iconButton/IconButton"
import Icon from "../../../../lib/components/icon/Icon"
import Drawer from "../../../../lib/components/drawer/Drawer"
import Divider from "../../../../lib/components/divider/Divider"

import { useNavigate } from "react-router-dom"

import "./AppbarDrawer.css"

interface AppbarDrawerProps {
  navItems: { name: string; to: string }[]
}

export const AppbarDrawer = ({ navItems }: AppbarDrawerProps) => {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  const onClick = (to: string) => {
    setOpen(false)
    navigate(to)
  }

  return (
    <div className="MobileAppbar">
      <IconButton onClick={() => setOpen(!open)}>
        <Icon name="menu" />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
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
