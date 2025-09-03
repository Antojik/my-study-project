import styles from "./PostLengthFilter.module.css";

interface PostLengthFilterProps {
  value: number;
  onChange: (value: number) => void;
}

export const PostLengthFilter = ({
  value,
  onChange,
}: PostLengthFilterProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value) || 0);
  };

  return (
    <div className={styles.filter}>
      <label className={styles.label}>Type minimal title length</label>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
