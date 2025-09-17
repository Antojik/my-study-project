import styles from "./Button.module.css";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
