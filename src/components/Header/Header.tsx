//styles
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles["container"]}>
      <nav className={styles["nav"]}>
        <span>About Me</span>
        <span>Projects</span>
        <span>Contact me</span>
      </nav>
    </header>
  );
};
