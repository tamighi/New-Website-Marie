import {
  Button,
  Divider,
  Drawer,
  HomeIcon,
  TableChartIcon,
  useMediaQuery,
} from "lib";
import { useNavigate } from "react-router-dom";

import styles from "./Sidebar.css";

const pages = [
  { name: "Dashboard", to: "/", logo: <HomeIcon />, divider: true },
  { name: "Services", to: "/services", logo: <TableChartIcon /> },
];

interface SidebarProps {
  open: boolean;
  toggleSideBar: () => void;
}

export const Sidebar = ({ open, toggleSideBar }: SidebarProps) => {
  const isSmall = useMediaQuery("only screen and (max-width: 600px)");

  const navigate = useNavigate();
  const onClose = () => {
    if (open && toggleSideBar) {
      toggleSideBar();
    }
  };

  return (
    <>
      <div className={`${styles.Sidebar} ${open ? styles.Open : styles.Close}`}>
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <Button onClick={() => navigate(page.to)}>
                {page.logo}
                {open && page.name}
              </Button>
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
                <Button
                  onClick={() => {
                    navigate(page.to);
                    onClose();
                  }}
                >
                  {page.logo}
                  {page.name}
                </Button>
                {page.divider && <Divider />}
              </li>
            ))}
          </ul>
        </Drawer>
      )}
    </>
  );
};
