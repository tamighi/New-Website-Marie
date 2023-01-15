import { Link } from "react-router-dom"

import Card from "../../custom/Card"
import { ThemeToggleIcon } from "./ThemeToggleIcon"
import { AppbarDrawer } from "./AppbarDrawer"

import "../../../styles/Appbar.css"
import "../../../styles/colors.css"

const navItems = [
  {
    name: "Home",
    to: "",
  },
  {
    name: "Contact",
    to: "contact",
  },
]

export const Appbar = () => {
  return (
    <div className="Appbar">
      <Card>
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
      </Card>
    </div>
  )
}
