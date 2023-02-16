import { Icon } from ".."
import { SvgIconProps } from "."

import pathIcon from "assets/icons/home.svg"

const HomeIcon = (props: SvgIconProps) => {
  return <Icon {...props} src={pathIcon} />
}

export default HomeIcon
