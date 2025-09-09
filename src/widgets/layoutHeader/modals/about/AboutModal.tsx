import { Button } from "../../../../shared/ui/button/Button";
import { Modal } from "../../../../shared/ui/modal/Modal";
import styles from "./AboutModal.module.css";

interface HeaderModalProps {
  open: boolean;
  onClose: () => void;
}

export const AboutModal = ({ open, onClose }: HeaderModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <div>About Project</div>
      </Modal.Header>
      <Modal.Body>
        <div>
          This project is an application for viewing posts and comments based on
          the public&nbsp;
          <a
            className={styles.link}
            href="https://jsonplaceholder.typicode.com/"
            target="blank"
          >
            JSONPlaceholder
          </a>
          &nbsp;API.
        </div>
        <br />
        <div>
          It based on Vite + React + TypeScript, using CSS modules for styling
          components and also have FSD-architecture
        </div>
        <br />
        <div>This project only for my studying</div>
      </Modal.Body>
      <Modal.Actions>
        <Button onClick={onClose} text="Close" />
      </Modal.Actions>
    </Modal>
  );
};
