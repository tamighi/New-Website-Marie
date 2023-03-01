import React from "react";

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

  const [visible, setVisible] = React.useState(open);

  React.useEffect(() => {
    if (open) {
      setVisible(open);
    }
    const timer = setTimeout(() => {
      if (!open) {
        setVisible(open);
      }
    }, 225);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div
      className={`${CSSClasses.DrawerContainer} ${
        visible ? "" : CSSClasses.HiddenContainer
      }`}
      onClick={onClose}
    >
      <div
        className={`${CSSClasses.Background} ${
          open ? "" : CSSClasses.HiddenBackground
        }`}
      />
      <div
        className={`${classNames} ${open ? "" : CSSClasses.HiddenDrawer}`}
        style={styles}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
