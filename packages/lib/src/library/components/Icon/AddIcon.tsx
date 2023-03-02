import { SvgIconProps } from ".";
import IconBase from "./IconBase";

const AddIcon = (props: SvgIconProps) => {
  return (
    <IconBase
      {...props}
      coloredPath="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    ></IconBase>
  );
};

export default AddIcon;
