import React from "react";
import { Drawer, HomeIcon, TableChartIcon } from "lib";
import { useNavigate } from "react-router-dom";

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
  const isSmall = false;

  const navigate = useNavigate();
  const onClose = () => {
    if (open && toggleSideBar) {
      toggleSideBar();
    }
  };

  const [visibleTitles, setVisibleTitles] = React.useState(open);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleTitles(open);
    }, 500);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <>
      <div
        className={styles.Sidebar}
        style={{ width: `${open ? "150px" : "45px"}` }}
      >
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <button onClick={() => navigate(page.to)}>
                {page.logo}
                {(visibleTitles? open : visibleTitles) && page.name}
              </button>
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
                <button onClick={() => navigate(page.to)}>{page.name}</button>
              </li>
            ))}
          </ul>
        </Drawer>
      )}
    </>
  );
};
