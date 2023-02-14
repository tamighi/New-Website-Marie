import { Appbar as LibAppbar, MenuIcon, IconButton } from "lib"

interface AppbarProps {
  toggleSideBar: () => void
}

export const Appbar = ({ toggleSideBar }: AppbarProps) => {
  return (
    <div style={{ padding: "48px" }}>
      <LibAppbar>
        <IconButton onClick={toggleSideBar || undefined}>
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1, textAlign: "center" }}>Appbar</div>
      </LibAppbar>
    </div>
  )
}
