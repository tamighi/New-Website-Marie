import { useStyles } from "../../hooks";
import CSSClasses from "./Divider.css";

export type DividerProps = React.HTMLAttributes<HTMLHRElement>

const Divider = (props: DividerProps) => {
  const { style, className, ...rest } = props;

  const classNames = `${CSSClasses.Divider} ` + (className || "");

  const styles = useStyles("primary", style);

  return <hr className={classNames} style={styles} {...rest} />;
};

export default Divider;
