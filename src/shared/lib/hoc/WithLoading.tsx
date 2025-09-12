import type { ComponentType } from "react";
import styles from "./WithLoading.module.css";

export function WithLoading<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return function ComponentWithLoading({
    isLoading,
    ...props
  }: P & { isLoading?: boolean }) {
    if (isLoading) {
      return <div className={styles.loading}>Loading...</div>;
    }
    return <WrappedComponent {...(props as P)} />;
  };
}
