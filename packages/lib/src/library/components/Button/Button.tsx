import { useStyles } from "library";

import CSSClasses from "./Button.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { style, children, className, ...rest } = props;

  const classNames = `${CSSClasses.Button} ` + (className || "");

  const styles = useStyles("transparent", style);

  return (
    <button style={styles} className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
