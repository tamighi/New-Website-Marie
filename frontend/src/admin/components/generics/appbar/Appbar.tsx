import LibAppbar from "../../../../lib/components/appbar/Appbar"
import IconButton from "../../../../lib/components/iconButton/IconButton"
import { ThemeToggleIcon } from "./ThemeToggleIcon"

import { useToggleSideBar } from "../../../hooks/SideBarContext"
import useColors from "../../../../lib/hooks/hooks/useColors"

export const Appbar = () => {
  const colors = useColors()
  const toggleSideBar = useToggleSideBar()

  return (
    <LibAppbar style={{ backgroundColor: colors.primaryColor }}>
      <IconButton name="menu" onClick={toggleSideBar || undefined} />
      <div style={{ flexGrow: 1, textAlign: "center" }}>Appbar</div>
      <ThemeToggleIcon />
    </LibAppbar>
  )
}
