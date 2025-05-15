//styles
import styles from "./header.module.css";

export const Header = () => {
  return (
    <nav className={styles["container"]}>
      <span className={styles["home--link"]}> Home</span>
      <div className={styles["items--container"]}>
        <span>My knowledge</span>
        <span>Contact me</span>
      </div>
    </nav>
  );
};
