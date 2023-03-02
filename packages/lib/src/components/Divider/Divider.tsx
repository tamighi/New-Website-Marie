import { useStyles } from "../../hooks";
import { DefaultProps } from "..";
import CSSClasses from "./Divider.css";

export type DividerProps = DefaultProps;

const Divider = (props: DividerProps) => {
  const { style, className } = props;

  const classNames = `${CSSClasses.Divider} ` + (className || "");

  const styles = {
    ...useStyles("secondary"),
    ...style,
  };

  return <hr className={classNames} style={styles} />;
};

export default Divider;
