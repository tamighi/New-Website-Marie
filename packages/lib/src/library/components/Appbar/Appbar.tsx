import { Paper } from "..";
import { useStyles } from "../../hooks";

import CSSClasses from "./Appbar.css";

export type AppbarProps = React.HTMLAttributes<HTMLDivElement>

const Appbar = (props: AppbarProps) => {
  const { style, children, className, ...rest } = props;

  const classNames = `${CSSClasses.Appbar} ` + (className || "");

  const styles = useStyles("primary", style);

  return (
    <Paper style={styles} className={classNames} {...rest}>
      {children}
    </Paper>
  );
};

export default Appbar;
