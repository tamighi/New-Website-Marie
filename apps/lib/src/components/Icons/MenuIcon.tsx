import { Icon, IconProps } from ".."
import iconPath from "assets/icons/menu.svg"

const MenuIcon = (props: IconProps) => {
  return <Icon {...props} src={iconPath} />
}

export default MenuIcon
