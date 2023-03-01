import { Card } from "..";
import { useModal } from "../../providers";

import styles from "./Modal.css";

const Modal = () => {
  const { modalState, closeModal } = useModal();

  if (!modalState) {
    return null;
  }
  const onOkClick = () => {
    modalState.okCallback?.();
    closeModal();
  };

  const onCancelClick = () => {
    modalState.closeCallback?.();
    closeModal();
  };

  return (
    <>
      {modalState?.open && (
        <Card className={styles.Modal}>
          Modal <br />
          {modalState.content}
          <button onClick={onOkClick}>Ok</button>
          <button onClick={onCancelClick}>Cancel</button>
        </Card>
      )}
    </>
  );
};

export default Modal;
