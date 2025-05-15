//styles
import { useLogo } from "./hooks/logo.hook";
import styles from "./myKnowledge.module.css";

export const MyKnowledge = () => {
  const { data } = useLogo();

  return (
    <article className={styles["my--knowledge--container"]}>
      <h2 className={styles["text-my-knowledge"]}>
        I have skills for program in:{" "}
      </h2>

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
