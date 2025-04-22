import styles from "./header.module.css";
import ThemeToggleButton from "../../shared/ThemeToggleButton/ThemeToggleButton";

export function Header() {
  return (
    <header className={styles.header}>
      <p>Logo</p>
      <ThemeToggleButton />
    </header>
  );
}
