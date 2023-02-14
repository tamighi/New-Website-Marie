import { Icon, IconProps } from ".."
import iconPath from "assets/icons/moon.svg"

const MoonIcon = (props: IconProps) => {
  return <Icon {...props} src={iconPath} />
}

export default MoonIcon
