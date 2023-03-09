import { useStyles } from "library";

import CSSClasses from "./IconButton.css";

export type IconButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const IconButton = (props: IconButtonProps) => {
  const { style: customStyle, children, className, ...rest } = props;

  const classNames = `${CSSClasses.IconButton} ` + (className || "");

  const styles = useStyles({ type: "transparent", customStyle });

  return (
    <button className={classNames} style={styles} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
