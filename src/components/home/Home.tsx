//styles
import styles from "./home.module.css";

export const Home = () => {
  return (
    <section className={styles["home--container"]} id="home">
      <h1 className={styles["name"]}>
        MIGUEL <br />
        <span className={styles["last__name"]}>MORENO</span>
      </h1>

      <h3>I'm a frontend Developer</h3>

      <a href="/Documents/HOJA DE VIDA.docx" download>
        <button className={styles["button"]}>
          <i className="bi bi-download"></i> <span>Download CV </span>
        </button>
      </a>
    </section>
  );
};
