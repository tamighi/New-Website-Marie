import { useStyles } from "../../hooks";
import { DefaultProps } from "..";

import CSSClasses from "./Paper.css";

export type PaperProps = DefaultProps;

const Paper = (props: DefaultProps) => {
  const { style, children, className } = props;

  const classNames = `${CSSClasses.Paper} ` + (className || "");

  const styles = {
    ...useStyles("background"),
    ...style,
  };

  return (
    <div className={classNames} style={styles}>
      {children}
    </div>
  );
};

export default Paper;
