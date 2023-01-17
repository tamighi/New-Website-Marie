import Drawer from "../../../../lib/components/drawer/Drawer"
import { useOpenSideBar, useToggleSideBar } from "../../../hooks/SideBarContext"

export const Sidebar = () => {
  const open = useOpenSideBar()
  const toggleSideBar = useToggleSideBar()

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
