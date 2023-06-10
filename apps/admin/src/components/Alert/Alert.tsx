import { Card, IDialogState } from "lib";
import React from "react";
import styles from "./Alert.css";

const Alert = ({
  dialogState,
  closeDialog,
}: {
  dialogState: IDialogState;
  closeDialog: () => void;
}) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (dialogState.open) {
        closeDialog();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [dialogState, closeDialog]);

  return (
    <Card
      className={`${styles.Alert} ${
        dialogState.open ? styles.Open : styles.Close
      }`}
    >
      {dialogState.content}
    </Card>
  );
};

export default Alert;
