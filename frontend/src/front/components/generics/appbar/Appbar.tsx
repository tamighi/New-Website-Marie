import { Link } from "react-router-dom"

import Card from "../../custom/Card"
import { ThemeToggleIcon } from "./ThemeToggleIcon"

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
  return (
    <Card style={{ marginBottom: "20px" }}>
      <div className="Appbar">
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
    </Card>
  )
}
