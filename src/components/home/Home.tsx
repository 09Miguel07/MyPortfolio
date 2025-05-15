//styles
import styles from "./home.module.css";

export const Home = () => {
  return (
    <article className={styles["home--container"]}>
      <h1 className={styles["title"]}>I'm Miguel Moreno</h1>
      <p className={styles["description"]}>
        I'm a junior frontend developer, I'm passionate about create and
        participate in the development of applications and web pages.{" "}
      </p>
    </article>
  );
};
