import Icon from "../icon/Icon"

import "./IconButton.css"

interface IconButtonProps {
  name: string
  onClick: (() => void) | undefined
}

const IconButton = (props: IconButtonProps) => {
  return (
    <button className="IconButton" onClick={props.onClick}>
      <Icon name={props.name} />
    </button>
  )
}

export default IconButton
