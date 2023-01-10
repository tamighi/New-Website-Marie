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
      <ul>
        {rightButtons.map((button) => (
          <li key={button.name}>
            <Link
              className="Link"
              to={button.to}
              style={{
                color: colors.secondaryColor,
              }}
            >
              {button.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
