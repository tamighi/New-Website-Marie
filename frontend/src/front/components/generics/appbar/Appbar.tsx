import { Link } from "react-router-dom"

import { ThemeToggleIcon } from "./ThemeToggleIcon"
import { AppbarDrawer } from "./AppbarDrawer"
import Paper from "../../custom/Paper"

import "../../../styles/Appbar.css"
import "../../../styles/colors.css"

const navItems = [
  {
    name: "Home",
    to: "",
  },
  {
    name: "Services",
    to: "services",
  },
  {
    name: "Contact",
    to: "contact",
  },
  {
    name: "Livre d'or",
    to: "livredor",
  },
]

export const Appbar = () => {
  return (
    <div style={{ padding: "48px" }}>
      <Paper
        style={{
          position: "fixed",
          zIndex: 1100,
          top: 0,
          right: 0,
          width: "100%",
        }}
      >
        <div className="Navbar">
          <AppbarDrawer navItems={navItems} />
          <ThemeToggleIcon />
          <div className="Logo">Marie Somville</div>
          <ul className="LinkList">
            {navItems.map((button) => (
              <li key={button.name}>
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
