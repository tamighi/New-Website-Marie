import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Appbar,
  CommentIcon,
  Divider,
  Drawer,
  HomeIcon,
  IconButton,
  MenuIcon,
  Navbar,
  TableChartIcon,
} from "library";
import { ThemeToggleIcon } from "./ThemeToggleIcon";

const links = [
  {
    icon: <HomeIcon />,
    to: "/",
  },
  {
    icon: <TableChartIcon />,
    to: "/dataGrid",
  },
  {
    icon: <CommentIcon />,
    to: "/form",
  },
];

export const TestAppbar = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Appbar>
        <Navbar>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <ThemeToggleIcon />
          <div style={{ flexGrow: 1 }} />
          <ul style={{ display: "flex" }}>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <IconButton onClick={() => navigate(link.to)}>
                    {link.icon}
                  </IconButton>
                </li>
              );
            })}
          </ul>
        </Navbar>
      </Appbar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        Hello World
        <Divider />
      </Drawer>
    </>
  );
};
