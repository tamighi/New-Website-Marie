import LibAppbar from "@lib/components/appbar/Appbar"
import Icon from "@lib/components/icon/Icon"
import IconButton from "@lib/components/iconButton/IconButton"
import ThemeToggleIcon from "@lib/components/iconButton/ThemeToggleIcon"

import useColors from "@lib/hooks/hooks/useColors"

interface AppbarProps {
  toggleSideBar: () => void
}

export const Appbar = ({ toggleSideBar }: AppbarProps) => {
  const colors = useColors()

  return (
    <div style={{ padding: "48px" }}>
      <LibAppbar style={{ backgroundColor: colors.primaryColor }}>
        <IconButton onClick={toggleSideBar || undefined}>
          <Icon name="menu" />
        </IconButton>
        <div style={{ flexGrow: 1, textAlign: "center" }}>Appbar</div>
        <ThemeToggleIcon />
      </LibAppbar>
    </div>
  )
}
