//styles
import styles from "./footer.module.css";
import { useFooter } from "./hooks/footer.hook";

export const Footer = () => {
  const { data } = useFooter();

  return (
    <footer className={styles["contact--me--container"]} id="contactMe">
      <h2>Contact me: </h2>

      <div className={styles["links--container"]}>
        {data.map((item, index) => (
          <a href={item.url} key={index} className={styles["link"]}>
            <i className={`${item.icon} ${styles["icon"]}`}></i>
            <h3>{item.text}</h3>
          </a>
        ))}
      </div>
    </footer>
  );
};
