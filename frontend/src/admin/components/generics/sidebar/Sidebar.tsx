import Drawer from "../../../../lib/components/drawer/Drawer"

import "./Sidebar.css"

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
        Hello
      </div>
      <Drawer open={open || false} onClose={onClose} className="MobileSidebar">
        Drawer
      </Drawer>
    </>
  )
}
