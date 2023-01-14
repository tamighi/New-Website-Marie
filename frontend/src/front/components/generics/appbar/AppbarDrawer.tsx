import React from "react"

import Drawer from "../../custom/Drawer"
import IconButton from "../../custom/IconButton"
import Divider from "../../custom/Divider"

import "../../../styles/AppbarDrawer.css"
import { useNavigate } from "react-router-dom"

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
    <>
      <div className="MobileAppbar">
        <IconButton name="menu" onClick={() => setOpen(!open)} />
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
    </>
  )
}
