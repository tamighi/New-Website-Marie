import React from "react"

import Icon from "./Icon"

import { useDarkTheme } from "../../hooks/ThemeContext"

import "../../styles/IconButton.css"

interface IconButtonProps {
  name: string
  onClick: (() => void) | undefined
}

const IconButton = (props: IconButtonProps) => {
  const darkTheme = useDarkTheme()
  const [hover, setHover] = React.useState(false)

  const hoverStyle = {
    backgroundColor: darkTheme
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(0, 0, 0, 0.2)",
  }

  return (
    <button
      className="IconButton"
      onClick={props.onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={hover ? hoverStyle : {}}
    >
      <Icon name={props.name} />
    </button>
  )
}

export default IconButton
