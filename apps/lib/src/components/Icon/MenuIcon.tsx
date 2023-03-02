import { SvgIconProps } from ".";
import IconBase from "./IconBase";

const MenuIcon = (props: SvgIconProps) => {
  return (
    <IconBase
      {...props}
      coloredPath="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    ></IconBase>
  );
};

export default MenuIcon;
