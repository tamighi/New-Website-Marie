import { Colors } from "library/providers";
import { useStyles } from "../../hooks";
import CSSClasses from "./Divider.css";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  variant?: keyof Colors;
}

const Divider = (props: DividerProps) => {
  const {
    style: customStyle,
    className,
    variant: type = "primary",
    ...rest
  } = props;

  const classNames = `${CSSClasses.Divider} ` + (className || "");

  const styles = useStyles({ type, customStyle });

  return <hr className={classNames} style={styles} {...rest} />;
};

export default Divider;
