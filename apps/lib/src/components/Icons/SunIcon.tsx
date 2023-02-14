import { Icon, IconProps } from ".."
import iconPath from "assets/icons/sun.svg"

const SunIcon = (props: IconProps) => {
  return <Icon {...props} src={iconPath} />
}

export default SunIcon
