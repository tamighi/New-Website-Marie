import { Appbar as LibAppbar, MenuIcon, IconButton, Navbar } from "lib"

interface AppbarProps {
  toggleSideBar: () => void
}

export const Appbar = ({ toggleSideBar }: AppbarProps) => {
  return (
    <LibAppbar>
      <Navbar>
        <IconButton onClick={toggleSideBar || undefined}>
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1, textAlign: "center" }}>Appbar</div>
      </Navbar>
    </LibAppbar>
  )
}
