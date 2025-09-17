import type { PropsWithChildren, ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export const Modal = ({
  children,
  open,
  onClose,
}: PropsWithChildren<ModalProps>) => {
  const portalRoot = document.getElementById("portal");
  if (!portalRoot) return null;

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.wrapper} onClick={onClose} />
      <div className={styles.modal}>{children}</div>
    </>,
    portalRoot
  );
};

const ModalHeader = ({ children }: { children: ReactNode }) => (
  <div className={styles.header}>{children}</div>
);

const ModalBody = ({ children }: { children: ReactNode }) => (
  <div className={styles.body}>{children}</div>
);

const ModalActions = ({ children }: { children: ReactNode }) => (
  <div className={styles.actions}>{children}</div>
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Actions = ModalActions;
