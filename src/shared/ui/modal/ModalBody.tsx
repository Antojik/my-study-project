import type { ReactNode } from "react";
import styles from "./Modal.module.css";

export const ModalBody = ({ children }: { children: ReactNode }) => (
  <div className={styles.body}>{children}</div>
);
