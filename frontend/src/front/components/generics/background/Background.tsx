import { useDarkTheme } from "@lib/hooks/contexts/ThemeContext"
import "./Background.css"

export const Background = () => {
  const darkTheme = useDarkTheme()

  return (
    <div className="Background">
      <img
        src={"./backgrounds/winter.jpg"}
        alt=""
        style={{ opacity: darkTheme ? 1 : 0 }}
      />
      <img
        src={"./backgrounds/autumn.jpg"}
        alt=""
        style={{ opacity: darkTheme ? 0 : 1 }}
      />
    </div>
  )
}
