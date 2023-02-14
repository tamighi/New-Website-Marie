import { Icon } from ".."
import { SvgIconProps } from "."
import iconPath from "assets/icons/menu.svg"

const MenuIcon = (props: SvgIconProps) => {
  return <Icon {...props} src={iconPath} />
}

export default MenuIcon
