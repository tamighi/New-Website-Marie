import BlurryBackground from "../utils/BlurryBackground";

import { useStyles } from "../../hooks";
import { DefaultProps } from "..";

import CSSClasses from "./Drawer.css";

export interface DrawerProps extends DefaultProps {
  open: boolean;
  onClose: () => void;
}

const Drawer = (props: DrawerProps) => {
  const { style, children, className, open, onClose } = props;

  const classNames = `${CSSClasses.Drawer} ` + (className || "");

  const styles = {
    ...useStyles("background"),
    ...style,
  };

  styles.transition = styles.transition
    ? styles.transition + ", transform 225ms ease"
    : "transform 225ms ease";

  return (
    <BlurryBackground onClick={onClose} visible={open}>
      <div
        className={`${classNames} ${open ? "" : CSSClasses.HiddenDrawer}`}
        style={styles}
      >
        {children}
      </div>
    </BlurryBackground>
  );
};

export default Drawer;
