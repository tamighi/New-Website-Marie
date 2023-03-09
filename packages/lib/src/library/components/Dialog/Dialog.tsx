import { Button, Card, Divider } from "..";
import { Colors, IDialogState } from "../../providers";
import BlurryBackground from "../utils/BlurryBackground";

import styles from "./Dialog.css";

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  dialogState: IDialogState;
  closeDialog: () => void;
  variant?: keyof Colors;
}

const Dialog = (props: DialogProps) => {
  const { dialogState, closeDialog, ...rest } = props;

  const onOkClick = () => {
    dialogState.okCallback?.();
    closeDialog();
  };

  const onCancelClick = () => {
    dialogState.closeCallback?.();
    closeDialog();
  };

  return (
    <BlurryBackground onClick={closeDialog} visible={dialogState.open}>
      {dialogState.open && (
        <Card className={styles.Dialog} {...rest}>
          <p>{dialogState.content}</p>
          <Divider style={{ marginBottom: "10px" }} />
          <div className={styles.Buttons}>
            <Button onClick={onOkClick}>Ok</Button>
            <Button onClick={onCancelClick}>Cancel</Button>
          </div>
        </Card>
      )}
    </BlurryBackground>
  );
};

export default Dialog;
