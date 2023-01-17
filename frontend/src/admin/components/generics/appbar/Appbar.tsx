import React from "react"

import LibAppbar from "../../../../lib/components/appbar/Appbar"
import IconButton from "../../../../lib/components/iconButton/IconButton"
import { ThemeToggleIcon } from "./ThemeToggleIcon"

import useColors from "../../../hooks/useColors"
import { useToggleSideBar } from "../../../hooks/SideBarContext"

export const Appbar = () => {
  const colors = useColors()
  const toggleSideBar = useToggleSideBar()

  return (
    <LibAppbar style={{ backgroundColor: colors.primaryColor }}>
      <ThemeToggleIcon />
      <IconButton name="menu" onClick={toggleSideBar || undefined} />
      Appbar
    </LibAppbar>
  )
}
