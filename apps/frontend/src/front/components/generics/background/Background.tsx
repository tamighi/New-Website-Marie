import { useTheme } from "lib"

import "./Background.css"

export const Background = () => {
  const theme = useTheme()
  const darkMode = theme?.palette?.darkMode

  return (
    <div className="Background">
      <img
        src={"./backgrounds/winter.jpg"}
        alt=""
        style={{ opacity: darkMode ? 1 : 0 }}
      />
      <img
        src={"./backgrounds/autumn.jpg"}
        alt=""
        style={{ opacity: darkMode ? 0 : 1 }}
      />
    </div>
  )
}
