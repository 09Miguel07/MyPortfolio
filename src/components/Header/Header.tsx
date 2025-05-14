//styles
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles["container"]}>
      <nav>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact me</li>
      </nav>
    </header>
  );
};
