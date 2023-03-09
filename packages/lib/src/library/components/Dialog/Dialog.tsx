import { Button, Card, Divider } from "..";
import { Colors, IDialogState } from "../../providers";
import { BlurryBackground } from "../utils";

import styles from "./Dialog.css";

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  dialogState: IDialogState;
  closeDialog: () => void;
  variant?: keyof Colors;
}

const Dialog = (props: DialogProps) => {
  const { dialogState, closeDialog, ...rest } = props;

  const { okCallback, closeCallback, open } = dialogState;

  const onOkClick = () => {
    okCallback?.();
    closeDialog();
  };

  const onCancelClick = () => {
    closeCallback?.();
    closeDialog();
  };

  return (
    <BlurryBackground onClick={closeDialog} visible={open}>
      {dialogState.open && (
        <Card className={styles.Dialog} {...rest}>
          <p>{dialogState.content}</p>
          <Divider style={{ marginBottom: "10px" }} />
          <div className={styles.Buttons}>
            {okCallback && <Button onClick={onOkClick}>Ok</Button>}
            {closeCallback && <Button onClick={onCancelClick}>Cancel</Button>}
          </div>
        </Card>
      )}
    </BlurryBackground>
  );
};

export default Dialog;
