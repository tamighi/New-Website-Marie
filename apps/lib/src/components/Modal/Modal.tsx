import { Card, Divider } from "..";
import { IModalState } from "../../providers";
import BlurryBackground from "../utils/BlurryBackground";

import styles from "./Modal.css";

interface ModalProps {
  modalState: IModalState;
  closeModal: () => void;
}

const Modal = ({ modalState, closeModal }: ModalProps) => {
  const onOkClick = () => {
    modalState.okCallback?.();
    closeModal();
  };

  const onCancelClick = () => {
    modalState.closeCallback?.();
    closeModal();
  };

  return (
    <BlurryBackground onClick={closeModal} visible={modalState.open}>
      {modalState.open && (
        <Card className={styles.Modal}>
          <p>{modalState.content}</p>
          <Divider style={{ marginBottom: "10px" }} />
          <div className={styles.Buttons}>
            <button onClick={onOkClick}>Ok</button>
            <button onClick={onCancelClick}>Cancel</button>
          </div>
        </Card>
      )}
    </BlurryBackground>
  );
};

export default Modal;
