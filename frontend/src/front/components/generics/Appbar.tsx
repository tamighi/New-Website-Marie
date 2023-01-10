import { Link } from "react-router-dom"
import { useDarkTheme, useToggleTheme } from "../../hooks/ThemeContext"

import "../../styles/Appbar.css"
import "../../styles/colors.css"

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
  const toggleTheme = useToggleTheme()
  const darkTheme = useDarkTheme()

  if (!toggleTheme) {
    return null
  }
  return (
    <div
      className="Appbar"
      style={{
        backgroundColor: darkTheme ? "var(--dark-color)" : "var(--light-color)",
      }}
    >
      <button onClick={() => toggleTheme()}>Toggle</button>

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
