import type { ReactNode } from "react";
import styles from "./Modal.module.css";

export const ModalHeader = ({ children }: { children: ReactNode }) => (
  <div className={styles.header}>{children}</div>
);
