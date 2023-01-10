import { useDarkTheme } from "../../hooks/ThemeContext"

import "../../styles/Background.css"

export const Background = () => {
  const darkTheme = useDarkTheme()
  return (
    <div className="Background">
      <img
        src={
          darkTheme ? "./backgrounds/winter.jpg" : "./backgrounds/autumn.jpg"
        }
        alt="background"
      />
    </div>
  )
}
