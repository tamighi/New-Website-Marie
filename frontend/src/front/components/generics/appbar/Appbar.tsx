import { Link, useLocation } from "react-router-dom"

import { ThemeToggleIcon } from "./ThemeToggleIcon"
import { AppbarDrawer } from "./AppbarDrawer"
import Paper from "../../../../lib/components/paper/Paper"

import "../../../styles/Appbar.css"
import useColors from "../../../hooks/useColors"

const navItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Services",
    to: "/services",
  },
  {
    name: "Contact",
    to: "/contact",
  },
  {
    name: "Livre d'or",
    to: "/livredor",
  },
]

export const Appbar = () => {
  const location = useLocation()
  const colors = useColors()
  return (
    <div style={{ padding: "48px" }}>
      <Paper
        style={{
          position: "fixed",
          zIndex: 1100,
          top: 0,
          right: 0,
          width: "100%",
          backgroundColor: colors.primaryColor,
        }}
      >
        <div className="Navbar">
          <AppbarDrawer navItems={navItems} />
          <ThemeToggleIcon />
          <div className="Logo">Marie Somville</div>
          <ul className="LinkList">
            {navItems.map((button) => (
              <li key={button.name}>
                <img
                  alt=""
                  src={"./images/feather.png"}
                  style={{
                    height: "64px",
                    visibility:
                      button.to === location.pathname ? "visible" : "hidden",
                  }}
                ></img>
                <Link className="Link" to={button.to}>
                  {button.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Paper>
    </div>
  )
}
