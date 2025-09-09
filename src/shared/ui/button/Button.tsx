import styles from "./button.module.css";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
