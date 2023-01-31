import LibAppbar from "@lib/components/appbar/Appbar"
import Icon from "@lib/components/icon/Icon"
import IconButton from "@lib/components/iconButton/IconButton"
import ThemeToggleIcon from "@lib/components/iconButton/ThemeToggleIcon"

interface AppbarProps {
  toggleSideBar: () => void
}

export const Appbar = ({ toggleSideBar }: AppbarProps) => {

  return (
    <div style={{ padding: "48px" }}>
      <LibAppbar>
        <IconButton onClick={toggleSideBar || undefined}>
          <Icon name="menu" />
        </IconButton>
        <div style={{ flexGrow: 1, textAlign: "center" }}>Appbar</div>
        <ThemeToggleIcon />
      </LibAppbar>
    </div>
  )
}
