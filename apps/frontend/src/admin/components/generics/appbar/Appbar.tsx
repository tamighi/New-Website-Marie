import { HomeIcon } from "lib";
import { Appbar as LibAppbar, MenuIcon, IconButton, Navbar } from "lib";

import styles from "./Appbar.css"

interface AppbarProps {
  toggleSideBar: () => void;
}

export const Appbar = ({ toggleSideBar }: AppbarProps) => {
  return (
    <LibAppbar className={styles.Appbar}>
      <Navbar>
        <IconButton onClick={toggleSideBar || undefined}>
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1, textAlign: "center" }}>Appbar</div>
        <a href="/">
          <HomeIcon />
        </a>
      </Navbar>
    </LibAppbar>
  );
};
