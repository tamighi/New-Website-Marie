import React from "react"
import { Appbar } from "./appbar/Appbar"
import { Sidebar } from "./sidebar/Sidebar"

export const NavigationBars = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false)

  const toggleOpen = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <>
      <Appbar toggleSideBar={toggleOpen} />
      <Sidebar open={openSidebar} toggleSideBar={toggleOpen} />
    </>
  )
}
