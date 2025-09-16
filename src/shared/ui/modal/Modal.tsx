import type { ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { ModalActions } from "./ModalActions";
import { ModalBody } from "./ModalBody";
import { ModalHeader } from "./ModalHeader";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ children, open, onClose }: ModalProps) => {
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

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Actions = ModalActions;
