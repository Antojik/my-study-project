import { useState } from "react";
import { ThemeSwitcher } from "../../features/ui/ThemeSwitcher";
import { Button } from "../../shared/ui/button/Button";
import styles from "./Header.module.css";
import { AboutModal } from "./modals/about/AboutModal";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <h1>This is header</h1>
      <nav className={styles.navigate}>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Users
        </NavLink>
      </nav>
      <div className={styles.actions}>
        <Button onClick={handleOpenModal} text="About Project" />
        <ThemeSwitcher />
      </div>
      <AboutModal open={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};
