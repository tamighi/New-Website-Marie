import { Link, useLocation } from "react-router-dom"

import { ThemeToggleIcon } from "./ThemeToggleIcon"
import { AppbarDrawer } from "./AppbarDrawer"
import LibAppbar from "../../../../lib/components/appbar/Appbar"

import useColors from "../../../../lib/hooks/hooks/useColors"

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
  const colors = useColors()
  return (
    <div style={{ padding: "48px" }}>
      <LibAppbar
        style={{
          transition: "background .6s ease-in-out",
          backgroundColor: colors.primaryColor,
          color: "white",
        }}
      >
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
      </LibAppbar>
    </div>
  )
}
