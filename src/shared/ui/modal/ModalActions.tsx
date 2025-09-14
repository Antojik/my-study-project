import type { ReactNode } from "react";
import styles from "./Modal.module.css";

export const ModalActions = ({ children }: { children: ReactNode }) => (
  <div className={styles.actions}>{children}</div>
);
