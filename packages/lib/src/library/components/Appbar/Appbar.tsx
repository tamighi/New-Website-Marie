import { Colors } from "library/providers";
import { Paper } from "..";
import { useStyles } from "../../hooks";

import CSSClasses from "./Appbar.css";

export interface AppbarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof Colors;
}

const Appbar = (props: AppbarProps) => {
  const {
    style: customStyle,
    children,
    className,
    variant: type = "primary",
    ...rest
  } = props;

  const classNames = `${CSSClasses.Appbar} ` + (className || "");

  const styles = useStyles({ type, customStyle });

  return (
    <Paper style={styles} className={classNames} {...rest}>
      {children}
    </Paper>
  );
};

export default Appbar;
