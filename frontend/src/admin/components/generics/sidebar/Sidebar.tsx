import { Drawer } from "@lib/components"
import { Link } from "react-router-dom"

import "./Sidebar.css"

const pages = [
  { name: "Dashboard", to: "/admin" },
  { name: "Services", to: "/admin/services" },
]

interface SidebarProps {
  open: boolean
  toggleSideBar: () => void
}

export const Sidebar = ({ open, toggleSideBar }: SidebarProps) => {
  const onClose = () => {
    if (open && toggleSideBar) {
      toggleSideBar()
    }
  }

  return (
    <>
      <div className="Sidebar">
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <Link to={page.to}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Drawer open={open || false} onClose={onClose} className="MobileSidebar">
        Drawer
      </Drawer>
    </>
  )
}
