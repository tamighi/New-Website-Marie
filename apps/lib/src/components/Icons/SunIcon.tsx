import { Icon } from ".."
import { SvgIconProps } from "."
import iconPath from "assets/icons/sun.svg"

const SunIcon = (props: SvgIconProps) => {
  return <Icon {...props} src={iconPath} />
}

export default SunIcon
