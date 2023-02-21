import { Drawer } from "lib";
import { Link } from "react-router-dom";

import styles from "./Sidebar.css";

const pages = [
  { name: "Dashboard", to: "/admin" },
  { name: "Services", to: "/admin/services" },
];

interface SidebarProps {
  open: boolean;
  toggleSideBar: () => void;
}

export const Sidebar = ({ open, toggleSideBar }: SidebarProps) => {
  const onClose = () => {
    if (open && toggleSideBar) {
      toggleSideBar();
    }
  };

  return (
    <>
      <div className={styles.Sidebar}>
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <Link to={page.to}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.MobileSidebar}>
        <Drawer open={open || false} onClose={onClose}>
          <ul>
            Drawer
            {pages.map((page, index) => (
              <li key={index}>
                <Link to={page.to}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </Drawer>
      </div>
    </>
  );
};
