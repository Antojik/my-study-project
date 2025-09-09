import { useState } from "react";
import { ThemeSwitcher } from "../../features/ui/ThemeSwitcher";
import Button from "../../shared/ui/button/Button";
import styles from "./header.module.css";
import Modal from "../../shared/ui/modal/Modal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1>This is header</h1>
      <div className={styles.actions}>
        <Button onClick={() => setIsModalOpen(true)} text="About Project" />
        <ThemeSwitcher />
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>
          <div>About Project</div>
        </Modal.Header>
        <Modal.Body>
          <div>
            This project is an application for viewing posts and comments based
            on the public&nbsp;
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
          <Button onClick={() => setIsModalOpen(false)} text="Close" />
        </Modal.Actions>
      </Modal>
    </header>
  );
};

export default Header;
