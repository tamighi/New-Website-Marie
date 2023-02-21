import { Divider, Drawer, HomeIcon, TableChartIcon } from "lib";
import { useNavigate } from "react-router-dom";

import styles from "./Sidebar.css";

const pages = [
  { name: "Dashboard", to: "/admin", logo: <HomeIcon />, divider: true },
  { name: "Services", to: "/admin/services", logo: <TableChartIcon /> },
];

interface SidebarProps {
  open: boolean;
  toggleSideBar: () => void;
}

export const Sidebar = ({ open, toggleSideBar }: SidebarProps) => {
  const isSmall = true;

  const navigate = useNavigate();
  const onClose = () => {
    if (open && toggleSideBar) {
      toggleSideBar();
    }
  };

  return (
    <>
      <div
        className={styles.Sidebar}
        style={{ minWidth: `${open ? "200px" : "55px"}` }}
      >
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <button onClick={() => navigate(page.to)}>
                {page.logo}
                {open && page.name}
              </button>
              {page.divider && <Divider />}
            </li>
          ))}
        </ul>
      </div>
      {isSmall && (
        <Drawer
          open={open || false}
          onClose={onClose}
          className={styles.Drawer}
        >
          <ul>
            {pages.map((page, index) => (
              <li key={index}>
                <button onClick={() => navigate(page.to)}>
                  {page.logo}
                  {page.name}
                </button>
                {page.divider && <Divider />}
              </li>
            ))}
          </ul>
        </Drawer>
      )}
    </>
  );
};
