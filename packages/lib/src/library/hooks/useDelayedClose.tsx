import React from "react";

const useDelayedClose = (open: boolean) => {
  const [delayedClose, setDelayedClose] = React.useState(open);

  React.useEffect(() => {
    if (open) {
      setDelayedClose(open);
    }
    const timer = setTimeout(() => {
      if (!open) {
        setDelayedClose(open);
      }
    }, 225);
    return () => clearTimeout(timer);
  }, [open]);
  return delayedClose;
};

export default useDelayedClose;
