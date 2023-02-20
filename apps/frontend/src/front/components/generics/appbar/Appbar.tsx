import { useLocation, useNavigate } from "react-router-dom"

import { Appbar as LibAppbar, Navbar } from "lib"

import { AppbarDrawer } from "./AppbarDrawer"
import { ThemeToggleIcon } from "./ThemeToggleIcon"

import feather from "assets/images/feather.png"

import styles from "./Appbar.css"

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
  const navigation = useNavigate()

  return (
    <LibAppbar>
      <Navbar>
        <AppbarDrawer navItems={navItems} />
        <ThemeToggleIcon />
        <div className={styles.Logo}>Marie Somville</div>
        <ul className={styles.LinkList}>
          {navItems.map((button, id) => (
            <li key={id}>
              <img
                alt=""
                src={feather}
                style={{
                  height: "64px",
                  transform: button.to === location.pathname ? "" : "translateY(-70px)",
                  transition: "transform .2s ease"
                }}
              ></img>
              <button onClick={() => navigation(button.to)}>
                {button.name}
              </button>
            </li>
          ))}
        </ul>
      </Navbar>
    </LibAppbar>
  )
}
