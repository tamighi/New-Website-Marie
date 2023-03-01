import React from "react";

import { Card } from "lib";
import styles from "./Modal.css";

interface IModalState {
  open: boolean;
  content: string;
}

interface IModalContext {
  modalState: IModalState;
  setModalState: React.Dispatch<React.SetStateAction<IModalState>>;
}

const ModalContext = React.createContext<IModalContext | null>(null);

export const useModal = () => {
  return React.useContext(ModalContext);
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = React.useState<IModalState>({
    open: false,
    content: "",
  });

  return (
    <ModalContext.Provider
      value={{ modalState: modalState, setModalState: setModalState }}
    >
      {modalState.open && (
        <Card className={styles.Modal}>
          Modal <br />
          {modalState.content}
        </Card>
      )}
      {children}
    </ModalContext.Provider>
  );
};
