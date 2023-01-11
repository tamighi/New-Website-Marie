import { Link } from "react-router-dom"

import { ThemeToggleIcon } from "./ThemeToggleIcon"

import { useColors } from "../../../hooks/useColors"

import "../../../styles/Appbar.css"
import "../../../styles/colors.css"

const rightButtons = [
  {
    name: "home",
    to: "",
  },
  {
    name: "contact",
    to: "contact",
  },
]

export const Appbar = () => {
  const colors = useColors()

  return (
    <div
      className="Appbar"
      style={{
        backgroundColor: colors.primaryColor,
      }}
    >
      <ThemeToggleIcon />
      <div className="Logo">Marie Somville</div>
      <ul>
        {rightButtons.map((button) => (
          <li key={button.name}>
            <Link className="Link" to={button.to}>
              {button.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
