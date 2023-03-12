import { Colors } from "library/providers";
import { useStyles } from "../../hooks";
import CSSClasses from "./Divider.css";

const directionsClasses = {
  vertical: "Vertical",
  horizontal: "Horizontal",
};

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  variant?: keyof Colors;
  direction?: "vertical" | "horizontal";
}

const Divider = (props: DividerProps) => {
  const {
    style: customStyle,
    className,
    variant: type = "primary",
    direction = "horizontal",
    ...rest
  } = props;

  const classNames =
    `${CSSClasses.Divider} ${CSSClasses[directionsClasses[direction]]} ` +
    (className || "");

  const styles = useStyles({ type, customStyle });

  return <hr className={classNames} style={styles} {...rest} />;
};

export default Divider;
