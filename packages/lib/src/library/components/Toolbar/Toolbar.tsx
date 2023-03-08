import CSSClasses from "./Toolbar.css";

export type ToolbarProps = React.HTMLAttributes<HTMLElement>;

const Toolbar = (props: ToolbarProps) => {
  const { style, children, className, ...rest } = props;

  const classNames = `${CSSClasses.Toolbar} ` + (className || "");

  return (
    <nav className={classNames} style={style} {...rest}>
      {children}
    </nav>
  );
};

export default Toolbar;
