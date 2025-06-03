//styles
import styles from "./header.module.css";
import { useHeader } from "./hooks/header.hook";

export const Header = () => {
  const { scrollTo } = useHeader();

  return (
    <nav className={styles["container"]}>
      <span className={styles["item"]} onClick={() => scrollTo({ id: "home" })}>
        {" "}
        Home
      </span>
      <span
        className={styles["item"]}
        onClick={() => scrollTo({ id: "about" })}
      >
        About
      </span>
      <span
        className={styles["item"]}
        onClick={() => scrollTo({ id: "contactMe" })}
      >
        Contact me
      </span>
    </nav>
  );
};
