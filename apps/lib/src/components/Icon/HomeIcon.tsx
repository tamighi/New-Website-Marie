import { SvgIconProps } from ".";
import IconBase from "./IconBase";

const HomeIcon = (props: SvgIconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </IconBase>
  );
};

export default HomeIcon;
