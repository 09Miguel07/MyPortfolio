//styles
import { useLogo } from "./hooks/logo.hook";
import styles from "./about.module.css";

export const About = () => {
  const { data } = useLogo();

  return (
    <section className={styles["about__container"]} id="about">
      <p className={styles["description"]}>
        Junior Frontend Developer with a technical background in software
        programming, currently in his fourth semester of Systems Engineering.
        Passionate about creating modern, responsive, and user-centric
        interfaces. I stand out for my quick learning curve, teamwork, and
        problem-solving skills.
      </p>

      <div className={styles["my--skills--container"]}>
        <h2 className={styles["title"]}>My skills</h2>

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
      </div>
    </section>
  );
};
