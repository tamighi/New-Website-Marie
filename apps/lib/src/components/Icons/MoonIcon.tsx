import { Icon } from ".."
import { SvgIconProps } from "."
import iconPath from "assets/icons/moon.svg"

const MoonIcon = (props: SvgIconProps) => {
  return <Icon {...props} src={iconPath} />
}

export default MoonIcon
