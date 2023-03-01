import React from "react";

import { Modal } from "../components/Modal";

interface IModalState {
  open: boolean;
  content: string;
  okCallback?: () => void;
  closeCallback?: () => void;
}

interface IModalContext {
  modalState: IModalState;
  setModalState: React.Dispatch<React.SetStateAction<IModalState>>;
}

const initialModalValues: IModalState = {
  open: false,
  content: "",
  okCallback: () => {
    return;
  },
  closeCallback: () => {
    return;
  },
};

const ModalContext = React.createContext<IModalContext | null>(null);

export const useModal = () => {
  const modalContext = React.useContext(ModalContext);
  if (!modalContext) {
    return {
      showModal: undefined,
      closeModal: undefined,
      modalState: undefined,
    };
  }

  const { setModalState, modalState } = modalContext;
  const showModal = ({
    content,
    okCallback,
    closeCallback,
  }: Omit<IModalState, "open">) => {
    setModalState({ open: true, content, okCallback, closeCallback });
  };

  const closeModal = () => {
    setModalState(initialModalValues);
  };

  return {
    showModal,
    closeModal,
    modalState,
  };
};

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] =
    React.useState<IModalState>(initialModalValues);

  return (
    <ModalContext.Provider
      value={{ modalState: modalState, setModalState: setModalState }}
    >
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
