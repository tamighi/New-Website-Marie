import { DefaultProps } from "..";

import CSSClasses from "./Navbar.css";

export type NavbarProps = DefaultProps;

const Navbar = (props: NavbarProps) => {
  const { style, children, className } = props;

  const classNames = `${CSSClasses.Navbar} ` + (className || "");

  return (
    <nav className={classNames} style={style}>
      {children}
    </nav>
  );
};

export default Navbar;
