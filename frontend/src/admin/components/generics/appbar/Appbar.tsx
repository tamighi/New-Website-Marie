import LibAppbar from "../../../../lib/components/appbar/Appbar"
import IconButton from "../../../../lib/components/iconButton/IconButton"
import { ThemeToggleIcon } from "./ThemeToggleIcon"

import { useToggleSideBar } from "../../../hooks/SideBarContext"
import useColors from "../../../../lib/hooks/hooks/useColors"
import Icon from "../../../../lib/components/icon/Icon"

export const Appbar = () => {
  const colors = useColors()
  const toggleSideBar = useToggleSideBar()

  return (
    <LibAppbar style={{ backgroundColor: colors.primaryColor }}>
      <IconButton onClick={toggleSideBar || undefined}>
        <Icon name="menu" />
      </IconButton>
      <div style={{ flexGrow: 1, textAlign: "center" }}>Appbar</div>
      <ThemeToggleIcon />
    </LibAppbar>
  )
}
