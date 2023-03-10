import React from "react";

import CSSClasses from "./BlurryBlackground.css";

const BlurryBackground = ({
  onClick,
  visible,
  children,
}: {
  onClick?: () => void;
  visible: boolean;
  children: React.ReactNode;
}) => {
  const [displayed, setDisplayed] = React.useState(visible);

  React.useEffect(() => {
    if (visible) {
      setDisplayed(visible);
    }
    const timer = setTimeout(() => {
      if (!visible) {
        setDisplayed(visible);
      }
    }, 225);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div
      className={`${CSSClasses.DrawerContainer} ${
        displayed ? "" : CSSClasses.HiddenContainer
      }`}
    >
      <div
        className={`${CSSClasses.Background} ${
          visible ? "" : CSSClasses.HiddenBackground
        }`}
        onClick={onClick}
      />
      {children}
    </div>
  );
};

export default BlurryBackground;
