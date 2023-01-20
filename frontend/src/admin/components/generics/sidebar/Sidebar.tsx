import Drawer from "../../../../lib/components/drawer/Drawer"

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
    <Drawer open={open || false} onClose={onClose}>
      Drawer
    </Drawer>
  )
}
