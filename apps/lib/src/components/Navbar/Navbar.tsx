import { DefaultProps } from "..";

import "./Navbar.css";

export type NavbarProps = DefaultProps;

const Navbar = (props: NavbarProps) => {
  const { style, children, className } = props;

  const classNames = "Navbar " + (className || "");

  return (
    <nav className={classNames} style={style}>
      {children}
    </nav>
  );
};

export default Navbar;
