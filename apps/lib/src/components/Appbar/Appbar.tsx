import { Paper, DefaultProps } from "..";
import { useStyles } from "../../hooks";

import CSSClasses from "./Appbar.css";

export type AppbarProps = DefaultProps;

const Appbar = (props: AppbarProps) => {
  const { style, children, className } = props;

  const classNames = `${CSSClasses.Appbar} ` + (className || "");

  const styles = {
    ...useStyles("primary"),
    ...style,
  };

  return (
    <Paper style={styles} className={classNames}>
      {children}
    </Paper>
  );
};

export default Appbar;
