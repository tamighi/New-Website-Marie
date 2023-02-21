import { Drawer, HomeIcon, IconButton, TableChartIcon } from "lib";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Sidebar.css";

const pages = [
  { name: "Dashboard", to: "/admin", logo: <HomeIcon /> },
  { name: "Services", to: "/admin/services", logo: <TableChartIcon /> },
];

interface SidebarProps {
  open: boolean;
  toggleSideBar: () => void;
}

export const Sidebar = ({ open, toggleSideBar }: SidebarProps) => {
  const navigate = useNavigate();
  const onClose = () => {
    if (open && toggleSideBar) {
      toggleSideBar();
    }
  };

  const isSmall = false;

  return (
    <>
      <div className={styles.Sidebar}>
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <IconButton onClick={() => navigate(page.to)}>
                {page.logo}
                {open && page.name}
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
      {isSmall && (
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
      )}
    </>
  );
};
