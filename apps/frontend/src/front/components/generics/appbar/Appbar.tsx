import { Link, useLocation } from "react-router-dom"

import { Appbar as LibAppbar, Navbar } from "lib"

import { AppbarDrawer } from "./AppbarDrawer"
import { ThemeToggleIcon } from "./ThemeToggleIcon"

import "./Appbar.css"

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
  return (
    <LibAppbar>
      <Navbar>
        <AppbarDrawer navItems={navItems} />
        <ThemeToggleIcon />
        <div className="Logo">Marie Somville</div>
        <ul className="LinkList">
          {navItems.map((button, id) => (
            <li key={id}>
              <img
                alt=""
                src={"./images/feather.png"}
                style={{
                  height: "64px",
                  transform: button.to === location.pathname ? "" : "translateY(-70px)",
                  transition: "transform .2s ease"
                }}
              ></img>
              <Link className="Link" to={button.to}>
                {button.name}
              </Link>
            </li>
          ))}
        </ul>
      </Navbar>
    </LibAppbar>
  )
}
