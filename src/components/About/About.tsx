//styles
import { useLogo } from "./hooks/logo.hook";
import styles from "./about.module.css";

export const MyKnowledge = () => {
  const { data } = useLogo();

  return (
    <article className={styles["about--container"]} id="about">
      <p className={styles["description"]}>
        I'm a frontend developer, I'm passionate about create and participate in
        the development of applications and web pages. Currently, I'm a student
        of third semester of systems engineer{" "}
      </p>

      <h2 className={styles["text-my-knowledge"]}>My skills</h2>

      <div className={styles["logos-container"]}>
        {data.map((item, index) => (
          <img
            src={item.url}
            alt={item.alt}
            key={index}
            className={styles["logo"]}
          />
        ))}
      </div>
    </article>
  );
};
