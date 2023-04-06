import { useAuth } from "hooks/useAuth";
import { Button, HomeIcon } from "lib";
import { Appbar as LibAppbar, MenuIcon, IconButton, Navbar } from "lib";

import styles from "./Appbar.css";

interface AppbarProps {
  toggleSideBar: () => void;
}

export const Appbar = ({ toggleSideBar }: AppbarProps) => {
  const { logout } = useAuth();
  return (
    <LibAppbar className={styles.Appbar}>
      <Navbar>
        <IconButton onClick={toggleSideBar || undefined}>
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1, textAlign: "center" }}>Appbar</div>
        <Button onClick={logout} color={"secondary"}>Logout</Button>
        <a href="/">
          <HomeIcon />
        </a>
      </Navbar>
    </LibAppbar>
  );
};
