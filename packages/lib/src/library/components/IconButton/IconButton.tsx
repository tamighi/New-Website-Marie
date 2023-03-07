import CSSClasses from "./IconButton.css";

export type IconButtonProps = React.HTMLAttributes<HTMLButtonElement>

const IconButton = (props: IconButtonProps) => {
  const { style, children, className, ...rest } = props;

  const classNames = `${CSSClasses.IconButton} ` + (className || "");

  return (
    <button className={classNames} style={style} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
